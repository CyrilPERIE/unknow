"use client";

import staticText from "@/lib/locales/fr/static-text";
import LoginCredentialsForm from "@/components/login/login-credentials-form";
import PasswordResetForm from "@/components/password/password-request-password-reset-form";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/components/hooks/use-toggle";

export default function LoginPage() {
  const { toggle, isOpen } = useToggle();

  const title = isOpen
    ? staticText.passwordForgotten.title
    : staticText.login.title;

  const Form = isOpen
    ? PasswordResetForm
    : LoginCredentialsForm;

  const buttonText = isOpen
    ? staticText.passwordForgotten.backToLogin
    : staticText.passwordForgotten.title;

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-96 mx-auto ">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Form className="w-full" />
      <Button onClick={toggle} className="w-full">
        {buttonText}
      </Button>
    </div>
  );
}
