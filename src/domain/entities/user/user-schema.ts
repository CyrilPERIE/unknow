import staticText from "@/lib/locales/fr/static-text";
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().optional(),
  email: z
    .string()
    .email({ message: staticText.user.zod_error_messages.email_invalid }),
  password: z
    .string()
    .min(8, { message: staticText.user.zod_error_messages.password_min })
    .max(128, { message: staticText.user.zod_error_messages.password_max }),
  name: z
    .string()
    .min(1, { message: staticText.user.zod_error_messages.name_required }),
  emailVerified: z.boolean().optional(),
  image: z.string().optional(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
