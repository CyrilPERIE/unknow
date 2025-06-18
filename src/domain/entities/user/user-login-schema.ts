import { UserSchema } from "@/domain/entities/user";
import { z } from "zod";

export const UserCredentialsLoginSchema = UserSchema.pick({
  email: true,
  password: true,
});

export const defaultValuesUserLogin: UserCredentialsLoginSchemaType = {
  email: "",
  password: "",
};

export type UserCredentialsLoginSchemaType = z.infer<typeof UserCredentialsLoginSchema>;