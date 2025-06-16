import { z } from "zod";
import staticText from "@/lib/locales/fr/static-text";
import { UserSchema } from "./user-schema";

export const userRegisterCredentialsSchema = UserSchema.pick({
  email: true,
  password: true,
  name: true,
  image: true,
})
  .extend({
    passwordConfirmation: z
      .string()
      .min(8, { message: staticText.user.zod_error_messages.password_min })
      .max(128, { message: staticText.user.zod_error_messages.password_max }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: staticText.user.zod_error_messages.password_confirmation_invalid,
  });

export const defaultValuesUserRegisterCredentials: UserRegisterCredentialsSchemaType = {
  email: "",
  password: "",
  passwordConfirmation: "",
  name: "",
  image: "",
};

export type UserRegisterCredentialsSchemaType = z.infer<
  typeof userRegisterCredentialsSchema
>;
