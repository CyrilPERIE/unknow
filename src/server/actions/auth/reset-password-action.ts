import {
  UserResetPasswordSchema,
  UserResetPasswordSchemaType,
} from "@/domain/entities/user";
import { authClient } from "@/utils/auth-client";

export async function resetPasswordAction(data: UserResetPasswordSchemaType) {
  const safeData = UserResetPasswordSchema.safeParse(data);
  if (!safeData.success) {
    return { error: safeData.error.message };
  }
  const res = await authClient.requestPasswordReset({
    email: safeData.data.email,
  });
  if (res.error) {
    return { error: res.error.message };
  }
  return { data: res.data };
}
