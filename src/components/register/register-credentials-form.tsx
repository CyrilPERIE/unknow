"use client";

import { Form } from "@/components/ui/form";
import {
  defaultValuesUserRegisterCredentials,
  UserRegisterCredentialsSchema,
  UserRegisterCredentialsSchemaType,
} from "@/domain/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import staticText from "@/lib/locales/fr/static-text";
import { useForm } from "react-hook-form";
import { FormField, FormFieldType } from "@/components/ui/custom/form";
import { useState } from "react";
import { signupCredentialsAction } from "@/server/actions/auth/signup-credentials-action";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const formFields: FormFieldType<UserRegisterCredentialsSchemaType>[] = [
  {
    name: "email",
    label: staticText.user.placeholders.email,
    placeholder: staticText.user.placeholders.email,
    type: "email",
  },
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
  {
    name: "name",
    label: staticText.user.placeholders.name,
    placeholder: staticText.user.placeholders.name,
    description: staticText.user.descriptions.name,
    type: "text",
  },
];

type RegisterCredentialsFormProps = {
  className?: string;
};

export default function RegisterCredentialsForm({className}: RegisterCredentialsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<UserRegisterCredentialsSchemaType>({
    resolver: zodResolver(UserRegisterCredentialsSchema),
    defaultValues: defaultValuesUserRegisterCredentials,
  });

  const onSubmit = (data: UserRegisterCredentialsSchemaType) => {
    setIsLoading(true);
    signupCredentialsAction(data)
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success(staticText.register.register_success);
        }
      })
      .finally(() => {
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
            staticText.register.title
          )}
        </Button>
      </form>
    </Form>
  );
}
