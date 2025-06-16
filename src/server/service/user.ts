import { UserSchemaType } from "@/domain/entities/user/user-schema";
import { SafeParseReturnType } from "zod";

export interface UserService {
  get(id: string): Promise<SafeParseReturnType<UserSchemaType, UserSchemaType>>;
  getByEmail(email: string): Promise<SafeParseReturnType<UserSchemaType, UserSchemaType>>;
}
