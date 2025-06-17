import { UserSchema } from "@/domain/entities/user/user-schema";
import { z } from "zod";

export const userCredentialsLoginSchema = UserSchema.pick({
  email: true,
  password: true,
});

export const defaultValuesUserLogin: UserCredentialsLoginSchema = {
  email: "",
  password: "",
};

export type UserCredentialsLoginSchema = z.infer<typeof userCredentialsLoginSchema>;