import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserRequestPasswordResetSchemaType } from "@/domain/entities/user";
import staticText from "@/lib/locales/fr/static-text";
import { toast } from "sonner";
import { requestPasswordResetAction } from "@/server/actions/auth/request-password-reset-action";
import { useState } from "react";
import { Loader2 } from "lucide-react";

type PasswordRequestPasswordResetFormSubmitButtonProps = {
  form: UseFormReturn<UserRequestPasswordResetSchemaType>;
  className?: string;
};

export default function PasswordRequestPasswordResetFormSubmitButton({
  form,
  className,
}: PasswordRequestPasswordResetFormSubmitButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: UserRequestPasswordResetSchemaType) => {
    setIsLoading(true);
    requestPasswordResetAction(data).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }
      if (res.data) {
        toast.success(staticText.passwordForgotten.requestPasswordResetSuccess);
      }
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const isLoadingButtonContent = <Loader2 className="w-4 h-4 animate-spin" />;
  const isNotLoadingButtonContent = staticText.passwordForgotten.buttonSubmitText;
  const buttonContent = isLoading ? isLoadingButtonContent : isNotLoadingButtonContent;

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)} className={className} disabled={isLoading}>
      {buttonContent}
    </Button>
  );
}
