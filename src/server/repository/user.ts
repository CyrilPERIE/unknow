import { UserSchema, UserSchemaType } from "@/domain/entities/user";
import { UserService } from "@/server/service/user";
import prisma from "@/lib/prisma/prisma";
import { SafeParseReturnType } from "zod";

export class UserRepository implements UserService {
    
  async get(id: string): Promise<SafeParseReturnType<UserSchemaType, UserSchemaType>> {
    const user = await prisma.user.findUnique({ where: { id } });
    return UserSchema.safeParse(user);
  }

  async getByEmail(email: string): Promise<SafeParseReturnType<UserSchemaType, UserSchemaType>> {
    const user = await prisma.user.findUnique({ where: { email } });
    return UserSchema.safeParse(user);
  }
}