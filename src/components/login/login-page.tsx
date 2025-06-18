"use client";

import staticText from "@/lib/locales/fr/static-text";
import LoginCredentialsForm from "@/components/login/login-credentials-form";
import { useState } from "react";
import PasswordResetForm from "@/components/password/password-reset-form";
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Form />
      <Button onClick={toggleForm}>{buttonText}</Button>
    </div>
  );
}
