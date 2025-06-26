import { z } from "zod";
import { UserSchema } from "@/domain/entities/user/user-schema";

export const UserSafeSchema = UserSchema.omit({
  password: true,
});

export type UserSafeSchemaType = z.infer<typeof UserSafeSchema>;