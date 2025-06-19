import { z } from "zod";
import { UserRegisterCredentialsSchema } from "@/domain/entities/user";
import { arePasswordsEqualSuperRefine } from "@/domain/entities/helpers/refine";

export const UserUpdatePasswordSchema = UserRegisterCredentialsSchema._def.schema
  .pick({
    password: true,
    passwordConfirmation: true,
  })
  .superRefine((data, ctx) => arePasswordsEqualSuperRefine(ctx, data));

export const defaultValuesUserUpdatePassword: UserUpdatePasswordSchemaType = {
  password: "",
  passwordConfirmation: "",
};

export type UserUpdatePasswordSchemaType = z.infer<
  typeof UserUpdatePasswordSchema
>;
