"use client";

import {
  defaultValuesUserRequestPasswordReset,
  UserRequestPasswordResetSchema,
  UserRequestPasswordResetSchemaType,
} from "@/domain/entities/user";
import { FormField, FormFieldType } from "@/components/ui/custom/form";
import staticText from "@/lib/locales/fr/static-text";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { requestPasswordResetAction } from "@/server/actions/auth/request-password-reset-action";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const formFields: FormFieldType<UserRequestPasswordResetSchemaType>[] = [
  {
    name: "email",
    label: staticText.user.placeholders.email,
    placeholder: staticText.user.placeholders.email,
    type: "email"
  },
];


type PasswordRequestPasswordResetFormProps = {
  className?: string;
};

export default function PasswordRequestPasswordResetForm({className}: PasswordRequestPasswordResetFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<UserRequestPasswordResetSchemaType>({
    resolver: zodResolver(UserRequestPasswordResetSchema),
    defaultValues: defaultValuesUserRequestPasswordReset,
  });
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
