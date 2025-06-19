"use client";

import PasswordUpdateFormSubmitButton from "@/components/password/password-update-form-submit-button";
import staticText from "@/lib/locales/fr/static-text";
import { FormField, FormFieldType } from "../ui/form-field";
import {
  defaultValuesUserUpdatePassword,
  UserUpdatePasswordSchema,
  UserUpdatePasswordSchemaType,
} from "@/domain/entities/user";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";

const formFields: FormFieldType<UserUpdatePasswordSchemaType>[] = [
  {
    name: "password",
    label: staticText.user.placeholders.password,
    placeholder: staticText.user.placeholders.password,
  },
  {
    name: "passwordConfirmation",
    label: staticText.user.placeholders.password_confirmation,
    placeholder: staticText.user.placeholders.password_confirmation,
  },
];

export default function PasswordUpdateForm() {
  const form = useForm<UserUpdatePasswordSchemaType>({
    resolver: zodResolver(UserUpdatePasswordSchema),
    defaultValues: defaultValuesUserUpdatePassword,
  });
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  return (
    <div>
      <Form {...form}>
        {formFields.map((_field, index) => {
          return <FormField key={index} _field={_field} form={form} />;
        })}
        <PasswordUpdateFormSubmitButton form={form} token={token} />
      </Form>
    </div>
  );
}
