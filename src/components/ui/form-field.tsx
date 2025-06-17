import { Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField as _FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export type FormFieldType<T> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
};

export const FormField = <T extends object>({
  _field,
  form,
}: {
  _field: FormFieldType<T>;
  form: UseFormReturn<T>;
}) => {
  return (
    <_FormField
      control={form.control}
      name={_field.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{_field.label}</FormLabel>
          <FormControl>
            <Input
              type={_field.type}
              placeholder={_field.placeholder}
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
};
