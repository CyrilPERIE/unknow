"use client";

import staticText from "@/lib/locales/fr/static-text";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserRegisterSchemaType } from "@/domain/entities/user/user-register-credentials-schema";
import { signupCredentialsAction } from "@/server/actions/auth/signup-credentials-action";

export default function RegisterCredentialsActionButton({
  form,
}: {
  form: UseFormReturn<UserRegisterSchemaType>;
}) {
  const onSubmit = (data: UserRegisterSchemaType) => {
    signupCredentialsAction(data).then((res) => {
      if (res.error) {
        console.error(res.error);
      } else {
        console.log(res.data);
      }
    });
  };

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
      {staticText.register.title}
    </Button>
  );
}
