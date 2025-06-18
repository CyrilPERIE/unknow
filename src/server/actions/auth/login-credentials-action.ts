import {
  UserCredentialsLoginSchemaType,
  UserCredentialsLoginSchema,
} from "@/domain/entities/user";
import { authClient } from "@/utils/auth-client";
import routes from "@/lib/routes/routes";

export async function loginCredentialsAction(
  formData: UserCredentialsLoginSchemaType
) {
  const safeData = UserCredentialsLoginSchema.safeParse(formData);
  if (!safeData.success) {
    return {
      error: safeData.error.message,
    };
  }
  const { data, error } = await authClient.signIn.email({
    email: safeData.data.email,
    password: safeData.data.password,
    callbackURL: routes.dashboard,
  });
  if (error) {
    return {
      error: error.message,
    };
  }
  return {
    data: data,
  };
}
