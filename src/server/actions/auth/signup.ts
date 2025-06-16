"use server";

import { authClient } from "@/utils/auth-client";

export async function signup() {
    const { data, error } = await authClient.signUp.email({
        email: "test@example.com",
        password: "password1234",
        name: "test",
        image: "https://example.com/image.png",
    });
}