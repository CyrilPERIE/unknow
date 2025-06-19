import { UserUpdatePasswordSchema, UserUpdatePasswordSchemaType } from "@/domain/entities/user";
import { authClient } from "@/utils/auth-client";

export async function updatePasswordAction(data: UserUpdatePasswordSchemaType, token: string) {
  const safeData = UserUpdatePasswordSchema.safeParse(data);
  if (!safeData.success) {
    return { error: safeData.error.message };
  }
  const res = await authClient.resetPassword({
    newPassword: safeData.data.password,
    token: token,
  });
  if (res.error) {
    return { error: res.error.message };
  }
  return { data: res.data };
}