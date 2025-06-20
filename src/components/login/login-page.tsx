"use client";

import staticText from "@/lib/locales/fr/static-text";
import LoginCredentialsForm from "@/components/login/login-credentials-form";
import { useState } from "react";
import PasswordResetForm from "@/components/password/password-request-password-reset-form";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const toggleForm = () => setShowForgotPasswordForm((prev) => !prev);

  const title = showForgotPasswordForm
    ? staticText.passwordForgotten.title
    : staticText.login.title;

  const Form = showForgotPasswordForm
    ? PasswordResetForm
    : LoginCredentialsForm;

  const buttonText = showForgotPasswordForm
    ? staticText.passwordForgotten.backToLogin
    : staticText.passwordForgotten.title;

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-96 mx-auto ">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Form className="w-full" />
      <Button onClick={toggleForm} className="w-full">
        {buttonText}
      </Button>
    </div>
  );
}
