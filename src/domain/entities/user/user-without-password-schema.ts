import { z } from "zod";
import { UserSchema } from "@/domain/entities/user/user-schema";

export const UserWithoutPasswordSchema = UserSchema.omit({ password: true });

export type UserWithoutPasswordSchemaType = z.infer<typeof UserWithoutPasswordSchema>;