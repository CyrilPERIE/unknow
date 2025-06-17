"use client";

import { Form } from "@/components/ui/form";
import {
  defaultValuesUserRegisterCredentials,
  userRegisterCredentialsSchema,
  UserRegisterCredentialsSchemaType,
} from "@/domain/entities/user/user-register-credentials-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import staticText from "@/lib/locales/fr/static-text";
import { useForm } from "react-hook-form";
import { FormField, FormFieldType } from "@/components/ui/form-field";
import RegisterCredentialsFormSubmitButton from "@/components/register/register-credentials-form-submit-button";

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

export default function RegisterCredentialsForm() {
  const form = useForm<UserRegisterCredentialsSchemaType>({
    resolver: zodResolver(userRegisterCredentialsSchema),
    defaultValues: defaultValuesUserRegisterCredentials,
  });
  return (
    <Form {...form}>
      {formFields.map((_field, index) => {
        return <FormField key={index} _field={_field} form={form} />;
      })}
      <RegisterCredentialsFormSubmitButton form={form} />
    </Form>
  );
}
