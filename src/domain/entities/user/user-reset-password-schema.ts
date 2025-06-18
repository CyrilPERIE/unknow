import { z } from "zod";
import { UserSchema } from "@/domain/entities/user";

export const UserResetPasswordSchema = UserSchema.pick({
  email: true,
});

export const defaultValuesUserResetPassword: UserResetPasswordSchemaType = {
  email: "",
};

export type UserResetPasswordSchemaType = z.infer<typeof UserResetPasswordSchema>;