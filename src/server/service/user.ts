import { UserWithoutPasswordSchemaType } from "@/domain/entities/user/user-without-password-schema";
import { SafeParseReturnType } from "zod";

export interface UserService {
  get(id: string): Promise<SafeParseReturnType<UserWithoutPasswordSchemaType, UserWithoutPasswordSchemaType>>;
  getByEmail(email: string): Promise<SafeParseReturnType<UserWithoutPasswordSchemaType, UserWithoutPasswordSchemaType>>;
  getByName(name: string): Promise<SafeParseReturnType<UserWithoutPasswordSchemaType, UserWithoutPasswordSchemaType>>;
}
