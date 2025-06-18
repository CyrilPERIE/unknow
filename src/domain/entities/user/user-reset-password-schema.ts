import { z } from "zod";
import { UserRegisterCredentialsSchema } from "@/domain/entities/user";
import { arePasswordsEqualSuperRefine } from "@/domain/entities/helpers/refine";

export const UserResetPasswordSchema = UserRegisterCredentialsSchema._def.schema
  .pick({
    password: true,
    passwordConfirmation: true,
  })
  .superRefine((data, ctx) => arePasswordsEqualSuperRefine(ctx, data));

export type UserResetPasswordSchemaType = z.infer<
  typeof UserResetPasswordSchema
>;
