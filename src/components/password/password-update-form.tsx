"use client";

import staticText from "@/lib/locales/fr/static-text";
import { FormField, FormFieldType } from "@/components/ui/custom/form";
import {
  defaultValuesUserUpdatePassword,
  UserUpdatePasswordSchema,
  UserUpdatePasswordSchemaType,
} from "@/domain/entities/user";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updatePasswordAction } from "@/server/actions/auth/update-password-action";
import routes from "@/lib/routes/routes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const formFields: FormFieldType<UserUpdatePasswordSchemaType>[] = [
  {
    name: "password",
    label: staticText.user.placeholders.password,
    placeholder: staticText.user.placeholders.password,
    type: "password",
  },
  {
    name: "passwordConfirmation",
    label: staticText.user.placeholders.password_confirmation,
    placeholder: staticText.user.placeholders.password_confirmation,
    type: "password",
  },
];

type PasswordUpdateFormProps = {
  className?: string;
};

export default function PasswordUpdateForm({className}: PasswordUpdateFormProps) {
  const form = useForm<UserUpdatePasswordSchemaType>({
    resolver: zodResolver(UserUpdatePasswordSchema),
    defaultValues: defaultValuesUserUpdatePassword,
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: UserUpdatePasswordSchemaType) => {
    if (!token) {
      toast.error(staticText.passwordForgotten.errorTokenNotFound);
      return;
    }
    setIsLoading(true);
    updatePasswordAction(data, token).then((res) => {
      if (res.error) {
        toast.error(res.error);
        setIsLoading(false);
      }
      if (res.data) {
        toast.success(staticText.passwordForgotten.success);
        router.push(routes.login);
      }
    });
  };

  if (!token) {
    return <div>{staticText.passwordForgotten.errorTokenNotFound}</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {formFields.map((_field, index) => {
          return <FormField key={index} _field={_field} form={form} />;
        })}
        <Button type="submit" className="w-full mb-4" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            staticText.passwordForgotten.buttonSubmitText
          )}
        </Button>
      </form>
    </Form>
  );
}
