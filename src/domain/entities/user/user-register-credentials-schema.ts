import { z } from "zod";
import { UserSchema } from "@/domain/entities/user";
import { arePasswordsEqualSuperRefine } from "@/domain/entities/helpers/refine";

export const UserRegisterCredentialsSchema = UserSchema.pick({
  email: true,
  password: true,
  name: true,
  image: true,
})
  .extend({
    passwordConfirmation: UserSchema.shape.password,
  })
  .superRefine((data, ctx) => arePasswordsEqualSuperRefine(ctx, data));

export const defaultValuesUserRegisterCredentials: UserRegisterCredentialsSchemaType =
  {
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    image: "",
  };

export type UserRegisterCredentialsSchemaType = z.infer<
  typeof UserRegisterCredentialsSchema
>;
