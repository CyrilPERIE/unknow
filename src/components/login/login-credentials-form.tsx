"use client";

import {
  defaultValuesUserLogin,
  UserCredentialsLoginSchema,
  UserCredentialsLoginSchemaType,
} from "@/domain/entities/user";
import { FormField, FormFieldType } from "@/components/ui/form-field";
import staticText from "@/lib/locales/fr/static-text";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginCredentialsFormSubmitButton from "@/components/login/login-credentials-form-submit-button";
import { Form } from "@/components/ui/form";

const formFields: FormFieldType<UserCredentialsLoginSchemaType>[] = [
  {
    name: "email",
    label: staticText.user.placeholders.email,
    placeholder: staticText.user.placeholders.email,
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
  return (
    <Form {...form}>
      {formFields.map((_field, index) => {
        return <FormField key={index} _field={_field} form={form} />;
      })}
      <LoginCredentialsFormSubmitButton form={form} />
    </Form>
  );
}
