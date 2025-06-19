"use client";

import {
  defaultValuesUserRequestPasswordReset,
  UserRequestPasswordResetSchema,
  UserRequestPasswordResetSchemaType,
} from "@/domain/entities/user";
import { FormField, FormFieldType } from "@/components/ui/form-field";
import staticText from "@/lib/locales/fr/static-text";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordRequestPasswordResetFormSubmitButton from "@/components/password/password-request-password-reset-form-submit-button";

const formFields: FormFieldType<UserRequestPasswordResetSchemaType>[] = [
  {
    name: "email",
    label: staticText.user.placeholders.email,
    placeholder: staticText.user.placeholders.email,
    type: "email",
  },
];

export default function PasswordRequestPasswordResetForm() {
  const form = useForm<UserRequestPasswordResetSchemaType>({
    resolver: zodResolver(UserRequestPasswordResetSchema),
    defaultValues: defaultValuesUserRequestPasswordReset,
  });
  return (
    <Form {...form}>
      {formFields.map((_field, index) => {
        return <FormField key={index} _field={_field} form={form} />;
      })}
      <PasswordRequestPasswordResetFormSubmitButton form={form} />
    </Form>
  );
}
