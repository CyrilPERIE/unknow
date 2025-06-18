"use client";

import staticText from "@/lib/locales/fr/static-text";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserCredentialsLoginSchemaType } from "@/domain/entities/user";
import { loginCredentialsAction } from "@/server/actions/auth/login-credentials-action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginCredentialsFormSubmitButton({
  form,
}: {
  form: UseFormReturn<UserCredentialsLoginSchemaType>;
}) {
  const router = useRouter();
  const onSubmit = (data: UserCredentialsLoginSchemaType) => {
    loginCredentialsAction(data).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }
      if (res.data && res.data.url) {
        router.push(res.data.url);
      }
    });
  };

  return (
    <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
      {staticText.login.title}
    </Button>
  );
}
