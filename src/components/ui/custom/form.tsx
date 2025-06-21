import { FieldValues, Path, UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField as _FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FormFieldType<T> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
  className?: string;
};

type FormFieldProps<T extends FieldValues> = {
  _field: FormFieldType<T>;
  form: UseFormReturn<T>;
};

const FormField = <T extends FieldValues>({
  _field,
  form,
}: FormFieldProps<T>) => {
  return (
    <_FormField
      control={form.control}
      name={_field.name}
      render={({ field }) => (
        <FormItem className={cn(_field.className, "mb-4 w-full")}>
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

export { FormField, type FormFieldType };
