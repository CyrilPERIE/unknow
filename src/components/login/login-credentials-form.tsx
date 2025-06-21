"use client";

import {
  defaultValuesUserLogin,
  UserCredentialsLoginSchema,
  UserCredentialsLoginSchemaType,
} from "@/domain/entities/user";
import { FormField, FormFieldType } from "@/components/ui/custom/form";
import staticText from "@/lib/locales/fr/static-text";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginCredentialsAction } from "@/server/actions/auth/login-credentials-action";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const formFields: FormFieldType<UserCredentialsLoginSchemaType>[] = [
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
];

export default function LoginCredentialsForm() {
  const form = useForm<UserCredentialsLoginSchemaType>({
    resolver: zodResolver(UserCredentialsLoginSchema),
    defaultValues: defaultValuesUserLogin,
  });
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {formFields.map((_field) => {
          return <FormField key={_field.name} _field={_field} form={form} />;
        })}
        <Button type="submit" className="w-full mb-4" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            staticText.login.title
          )}
        </Button>
      </form>
    </Form>
  );
}
