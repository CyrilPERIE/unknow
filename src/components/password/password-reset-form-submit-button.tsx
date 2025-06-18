import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserResetPasswordSchemaType } from "@/domain/entities/user";
import staticText from "@/lib/locales/fr/static-text";
import { toast } from "sonner";
import { resetPasswordAction } from "@/server/actions/auth/reset-password-action";

type PasswordResetFormSubmitButtonProps = {
  form: UseFormReturn<UserResetPasswordSchemaType>;
};

export default function PasswordResetFormSubmitButton({
  form,
}: PasswordResetFormSubmitButtonProps) {
  const onSubmit = (data: UserResetPasswordSchemaType) => {
    resetPasswordAction(data).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }
      if (res.data) {
        console.log(res.data);
      }
    });
  };

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
      {staticText.passwordForgotten.buttonSubmitText}
    </Button>
  );
}
