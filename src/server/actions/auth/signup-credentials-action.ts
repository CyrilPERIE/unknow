"use server";

import { authClient } from "@/utils/auth-client";
import {
  UserRegisterCredentialsSchema,
  UserRegisterCredentialsSchemaType,
} from "@/domain/entities/user";
import staticText from "@/lib/locales/fr/static-text";
import { UserRepository } from "@/server/repository/user";

export async function signupCredentialsAction(
  formData: UserRegisterCredentialsSchemaType
) {
  const parsedFormData = UserRegisterCredentialsSchema.safeParse(formData);

  if (!parsedFormData.success) {
    return { error: parsedFormData.error.message };
  }

  if (
    parsedFormData.data.password !== parsedFormData.data.passwordConfirmation
  ) {
    return {
      error: staticText.user.zod_error_messages.password_confirmation_invalid,
    };
  }

  const userRepository = new UserRepository();
  const user = await userRepository.getByEmail(parsedFormData.data.email);
  if (user.success) {
    return { error: staticText.user.errors.email_already_exists };
  }
  
  const userByName = await userRepository.getByName(parsedFormData.data.name);
  if (userByName.success) {
    return { error: staticText.user.errors.name_already_exists };
  }

  const { data, error } = await authClient.signUp.email(parsedFormData.data);
  if (error) {
    return { error: error.message };
  }
  return { data };
}
