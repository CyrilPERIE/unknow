import { z } from "zod";
import { UserSchema } from "@/domain/entities/user";

export const UserEmailSchema = UserSchema.pick({
  email: true,
  name: true,
});

export type UserEmailSchemaType = z.infer<typeof UserEmailSchema>;

export const defaultValuesUserEmail: UserEmailSchemaType = {
  email: "",
  name: "",
};