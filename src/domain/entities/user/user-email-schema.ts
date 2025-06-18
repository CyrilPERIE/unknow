import { z } from "zod";
import { UserSchema } from "@/domain/entities/user/user-schema";

export const userEmailSchema = UserSchema.pick({
  email: true,
  name: true,
});

export type UserEmailSchemaType = z.infer<typeof userEmailSchema>;