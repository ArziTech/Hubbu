import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { registerSchema } from "@/lib/schemas/auth";

interface RegisterFormFieldsProps {
  form: UseFormReturn<z.infer<typeof registerSchema>>;
}

export default function RegisterFormFields({ form }: RegisterFormFieldsProps) {
  return (
    <>
      {["name", "email", "password", "confirmPassword"].map((fieldName) => (
        <div key={fieldName} className="grid gap-2">
          <FormField
            control={form.control}
            name={fieldName as keyof z.infer<typeof registerSchema>}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id={fieldName}
                    type={fieldName.includes("password") ? "password" : "text"}
                    placeholder={fieldName}
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription />
              </FormItem>
            )}
          />
        </div>
      ))}
    </>
  );
}
