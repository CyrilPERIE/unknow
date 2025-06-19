import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserRequestPasswordResetSchemaType } from "@/domain/entities/user";
import staticText from "@/lib/locales/fr/static-text";
import { toast } from "sonner";
import { requestPasswordResetAction } from "@/server/actions/auth/request-password-reset-action";

type PasswordRequestPasswordResetFormSubmitButtonProps = {
  form: UseFormReturn<UserRequestPasswordResetSchemaType>;
  className?: string;
};

export default function PasswordRequestPasswordResetFormSubmitButton({
  form,
  className,
}: PasswordRequestPasswordResetFormSubmitButtonProps) {
  const onSubmit = (data: UserRequestPasswordResetSchemaType) => {
    requestPasswordResetAction(data).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }
      if (res.data) {
        console.log(res.data);
      }
    });
  };

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)} className={className}>
      {staticText.passwordForgotten.buttonSubmitText}
    </Button>
  );
}
