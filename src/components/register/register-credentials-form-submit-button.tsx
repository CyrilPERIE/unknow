"use client";

import staticText from "@/lib/locales/fr/static-text";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserRegisterCredentialsSchemaType } from "@/domain/entities/user";
import { signupCredentialsAction } from "@/server/actions/auth/signup-credentials-action";
import { toast } from "sonner";

type RegisterCredentialsFormSubmitButtonProps = {
  form: UseFormReturn<UserRegisterCredentialsSchemaType>;
  className?: string;
};

export default function RegisterCredentialsFormSubmitButton({
  form,
  className,
}: RegisterCredentialsFormSubmitButtonProps) {
  const onSubmit = (data: UserRegisterCredentialsSchemaType) => {
    signupCredentialsAction(data).then((res) => {
      if (res.error) {
        console.error(res.error);
      } else {
        toast.success(staticText.register.register_success);
      }
    });
  };

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)} className={className}>
      {staticText.register.title}
    </Button>
  );
}
