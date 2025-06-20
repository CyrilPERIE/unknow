"use client";

import staticText from "@/lib/locales/fr/static-text";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserRegisterCredentialsSchemaType } from "@/domain/entities/user";
import { signupCredentialsAction } from "@/server/actions/auth/signup-credentials-action";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type RegisterCredentialsFormSubmitButtonProps = {
  form: UseFormReturn<UserRegisterCredentialsSchemaType>;
  className?: string;
};

export default function RegisterCredentialsFormSubmitButton({
  form,
  className,
}: RegisterCredentialsFormSubmitButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: UserRegisterCredentialsSchemaType) => {
    setIsLoading(true);
    signupCredentialsAction(data).then((res) => {
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(staticText.register.register_success);
      }
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const isLoadingButtonContent = <Loader2 className="w-4 h-4 animate-spin" />;
  const isNotLoadingButtonContent = staticText.register.title;
  const buttonContent = isLoading ? isLoadingButtonContent : isNotLoadingButtonContent;

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)} className={className} disabled={isLoading}>
      {buttonContent}
    </Button>
  );
}
