import { z } from "zod";
import { UserSchema } from "@/domain/entities/user";

export const UserRequestPasswordResetSchema = UserSchema.pick({
  email: true,
});

export const defaultValuesUserRequestPasswordReset: UserRequestPasswordResetSchemaType = {
  email: "",
};

export type UserRequestPasswordResetSchemaType = z.infer<
  typeof UserRequestPasswordResetSchema
>;