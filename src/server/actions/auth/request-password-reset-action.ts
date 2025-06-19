import {
  UserRequestPasswordResetSchema,
  UserRequestPasswordResetSchemaType,
} from "@/domain/entities/user";
import { authClient } from "@/utils/auth-client";
import routes from "@/lib/routes/routes";

export async function requestPasswordResetAction(
  data: UserRequestPasswordResetSchemaType
) {
  const safeData = UserRequestPasswordResetSchema.safeParse(data);
  if (!safeData.success) {
    return { error: safeData.error.message };
  }
  const res = await authClient.requestPasswordReset({
    email: safeData.data.email,
    redirectTo: routes.resetPassword,
  });
  if (res.error) {
    return { error: res.error.message };
  }
  return { data: res.data };
}
