"use client";

import staticText from "@/lib/locales/fr/static-text";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserCredentialsLoginSchemaType } from "@/domain/entities/user";
import { loginCredentialsAction } from "@/server/actions/auth/login-credentials-action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

type LoginCredentialsFormSubmitButtonProps = {
  form: UseFormReturn<UserCredentialsLoginSchemaType>;
  className?: string;
};

export default function LoginCredentialsFormSubmitButton({
  form,
  className,
}: LoginCredentialsFormSubmitButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: UserCredentialsLoginSchemaType) => {
    setIsLoading(true);
    loginCredentialsAction(data).then((res) => {
      if (res.error) {
        setIsLoading(false);
        toast.error(res.error);
      }
      if (res.data && res.data.url) {
        router.push(res.data.url);
      }
    });
  };

  const isLoadingButtonContent = <Loader2 className="w-4 h-4 animate-spin" />;
  const isNotLoadingButtonContent = staticText.login.title;
  const buttonContent = isLoading ? isLoadingButtonContent : isNotLoadingButtonContent;
  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)} className={className} disabled={isLoading}>
      {buttonContent}
    </Button>
  );
}
