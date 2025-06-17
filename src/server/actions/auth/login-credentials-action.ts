"use server";

import { userCredentialsLoginSchema, UserCredentialsLoginSchema } from "@/domain/entities/user/user-login-schema";
import { authClient } from "@/utils/auth-client";

export async function loginCredentialsAction(formData: UserCredentialsLoginSchema) {
    const safeData = userCredentialsLoginSchema.safeParse(formData);
    if (!safeData.success) {
        return {
            error: safeData.error.message,
        };
    }
    const { data, error } = await authClient.signIn.email({
        email: safeData.data.email,
        password: safeData.data.password,
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