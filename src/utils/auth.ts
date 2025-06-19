import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { sendResetPasswordEmail, sendVerificationEmail } from "@/lib/email";
import { UserEmailSchemaType } from "@/domain/entities/user";
import routes from "@/lib/routes/routes";
import { env } from "process";

const prisma = new PrismaClient();
export const auth = betterAuth({
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      const sender: UserEmailSchemaType = {
        email: env.BREVO_SENDER_EMAIL!,
        name: env.BREVO_SENDER_NAME!,
      };
      const to: UserEmailSchemaType[] = [
        {
          email: user.email,
          name: user.name,
        },
      ];
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set("callbackURL", routes.dashboard);
      await sendVerificationEmail(sender, to, parsedUrl.toString());
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    sendResetPassword: async ({ user, url }) => {
      const sender: UserEmailSchemaType = {
        email: env.BREVO_SENDER_EMAIL!,
        name: env.BREVO_SENDER_NAME!,
      };
      const to: UserEmailSchemaType[] = [
        {
          email: user.email,
          name: user.name,
        },
      ];
      await sendResetPasswordEmail(sender, to, url);
    },
  },
});
