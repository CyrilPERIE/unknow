import { Button } from "@/components/ui/button";
import { UserUpdatePasswordSchemaType } from "@/domain/entities/user";
import staticText from "@/lib/locales/fr/static-text";
import { UseFormReturn } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { updatePasswordAction } from "@/server/actions/auth/update-password-action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import routes from "@/lib/routes/routes";

type PasswordUpdateFormSubmitButtonProps = {
  form: UseFormReturn<UserUpdatePasswordSchemaType>;
  token: string | null;
  className?: string;
};

export default function PasswordUpdateFormSubmitButton({
  form,
  token,
  className,  
}: PasswordUpdateFormSubmitButtonProps) {
  const router = useRouter();
  const onSubmit = (data: UserUpdatePasswordSchemaType) => {
    if (!token) {
      toast.error(staticText.passwordForgotten.errorTokenNotFound);
      return;
    }
    updatePasswordAction(data, token).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }
      if (res.data) {
        toast.success(staticText.passwordForgotten.success);
        router.push(routes.login);
      }
    });
  };
  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)} className={className}>
      {staticText.passwordForgotten.buttonSubmitText}
      {form.formState.isSubmitting && <Loader2 className="w-4 h-4 ml-2" />}
    </Button>
  );
}
