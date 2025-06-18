import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { sendVerificationEmail } from "@/lib/email";
import { UserEmailSchemaType } from "@/domain/entities/user/user-email-schema";

const prisma = new PrismaClient()
export const auth = betterAuth({
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url }) => {
            const sender: UserEmailSchemaType = {
                email: "cyril.perie96@gmail.com",
                name: "Cyril Perie",
            }
            const to: UserEmailSchemaType[] = [{
                email: user.email,
                name: user.name,
            }]
            await sendVerificationEmail(
                sender,
                to,
                url
            )
        }
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
        // sendResetPassword: async ({ user, url, token }, request) => {
        //     await sendEmail({
        //         to: user.email,
        //         subject: 'Reset your password',
        //         text: `Click the link to reset your password: ${url}`
        //     })
        // }
    },
})