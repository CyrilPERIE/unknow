import { UserService } from "@/server/service/user";
import prisma from "@/lib/prisma/prisma";
import { SafeParseReturnType } from "zod";
import { UserWithoutPasswordSchema, UserWithoutPasswordSchemaType } from "@/domain/entities/user/user-without-password-schema";

export class UserRepository implements UserService {
  async get(
    id: string
  ): Promise<SafeParseReturnType<UserWithoutPasswordSchemaType, UserWithoutPasswordSchemaType>> {
    const user = await prisma.user.findUnique({ where: { id } });
    return UserWithoutPasswordSchema.safeParse(user);
  }

  async getByEmail(
    email: string
  ): Promise<SafeParseReturnType<UserWithoutPasswordSchemaType, UserWithoutPasswordSchemaType>> {
    const user = await prisma.user.findUnique({ where: { email } });
    return UserWithoutPasswordSchema.safeParse(user);
  }

  async getByName(
    name: string
  ): Promise<SafeParseReturnType<UserWithoutPasswordSchemaType, UserWithoutPasswordSchemaType>> {
    const user = await prisma.user.findUnique({ where: { name } });
    return UserWithoutPasswordSchema.safeParse(user);
  }
}
