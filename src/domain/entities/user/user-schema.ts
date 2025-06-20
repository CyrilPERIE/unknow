import staticText from "@/lib/locales/fr/static-text";
import { auth } from "@/utils/auth";
import { z } from "zod";

const MIN_PASSWORD_LENGTH = auth.options.emailAndPassword.minPasswordLength;
const MAX_PASSWORD_LENGTH = auth.options.emailAndPassword.maxPasswordLength;

export const UserSchema = z.object({
  id: z.string().optional(),
  email: z
    .string()
    .email({ message: staticText.user.zod_error_messages.email_invalid }),
  password: z
    .string()
    .min(MIN_PASSWORD_LENGTH, { message: staticText.user.zod_error_messages.password_min(MIN_PASSWORD_LENGTH) })
    .max(MAX_PASSWORD_LENGTH, { message: staticText.user.zod_error_messages.password_max(MAX_PASSWORD_LENGTH) }),
  name: z
    .string()
    .min(1, { message: staticText.user.zod_error_messages.name_required })
    .max(20, { message: staticText.user.zod_error_messages.name_max(20)}),
  emailVerified: z.boolean().optional(),
  image: z.string().optional(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
