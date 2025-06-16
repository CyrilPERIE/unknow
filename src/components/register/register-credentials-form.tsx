"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  defaultValuesUserRegisterCredentials,
  userRegisterCredentialsSchema,
  UserRegisterCredentialsSchemaType,
} from "@/domain/entities/user/user-register-credentials-schema";
import RegisterCredentialsActionButton from "@/components/register/register-credentials-action-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import staticText from "@/lib/locales/fr/static-text";
import { useForm } from "react-hook-form";

type FormField = {
  name: keyof UserRegisterCredentialsSchemaType;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
};

const formFields: FormField[] = [
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
        return (
          <FormField
            key={index}
            control={form.control}
            name={_field.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{_field.label}</FormLabel>
                <FormControl>
                  <Input
                    type={_field.type}
                    placeholder={staticText.user.placeholders.name}
                    {...field}
                  />
                </FormControl>
                {_field.description && (
                  <FormDescription>{_field.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        );
      })}
      <RegisterCredentialsActionButton form={form} />
    </Form>
  );
}
