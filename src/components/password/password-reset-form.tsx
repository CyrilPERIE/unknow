import {
  defaultValuesUserResetPassword,
  UserResetPasswordSchema,
  UserResetPasswordSchemaType,
} from "@/domain/entities/user";
import { FormField, FormFieldType } from "@/components/ui/form-field";
import staticText from "@/lib/locales/fr/static-text";
import { Form } from "@/components/ui/form";
import PasswordResetFormSubmitButton from "@/components/password/password-reset-form-submit-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formFields: FormFieldType<UserResetPasswordSchemaType>[] = [
  {
    name: "email",
    label: staticText.user.placeholders.email,
    placeholder: staticText.user.placeholders.email,
  },
];

export default function PasswordResetForm() {
  const form = useForm<UserResetPasswordSchemaType>({
    resolver: zodResolver(UserResetPasswordSchema),
    defaultValues: defaultValuesUserResetPassword,
  });
  return (
    <Form {...form}>
      {formFields.map((_field, index) => {
        return <FormField key={index} _field={_field} form={form} />;
      })}
      <PasswordResetFormSubmitButton form={form} />
    </Form>
  );
}
