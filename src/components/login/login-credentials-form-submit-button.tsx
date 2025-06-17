"use client";

import staticText from "@/lib/locales/fr/static-text";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserCredentialsLoginSchema } from "@/domain/entities/user/user-login-schema";
import { loginCredentialsAction } from "@/server/actions/auth/login-credentials-action";

export default function LoginCredentialsFormSubmitButton({
  form,
}: {
  form: UseFormReturn<UserCredentialsLoginSchema>;
}) {
  const onSubmit = (data: UserCredentialsLoginSchema) => {
    loginCredentialsAction(data).then((res) => {
      if (res.error) {
        console.error(res.error);
      } else {
        console.log(res.data);
      }
    });
  };

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
      {staticText.login.title}
    </Button>
  );
}
