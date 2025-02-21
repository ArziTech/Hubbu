import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import {
  getVerificationTokensByEmail,
  deleteVerificationTokensByEmail,
  createVerificationTokenByEmail,
} from "@/actions/verification-token";
import { sendEmailCode } from "@/actions/email";
import z from "zod";
import { registerSchema } from "@/lib/schemas/auth";
import { useTransition } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SendCodeButtonProps {
  form: UseFormReturn<z.infer<typeof registerSchema>>;
}

export default function SendCodeButton({ form }: SendCodeButtonProps) {
  const [isPending, startTransition] = useTransition();
  async function sendCode(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    startTransition(async function () {
      const email = form.getValues("email");
      if (!email) {
        toast({
          title: "Error",
          description: "Email is required",
          variant: "destructive",
        });
      } else {
        const checkResponse = await getVerificationTokensByEmail(email);
        if (checkResponse.status === "SUCCESS" && checkResponse.data) {
          await deleteVerificationTokensByEmail(email);
        }

        const createResponse = await createVerificationTokenByEmail(email);
        if (createResponse.status === "ERROR" || !createResponse.data) {
          toast({
            title: "Error",
            description: createResponse.error,
            variant: "destructive",
          });
        } else {
          const emailResponse = await sendEmailCode(
            email,
            createResponse.data.token,
          );
          if (emailResponse.status === "ERROR") {
            toast({
              title: "Error",
              description: emailResponse.error,
              variant: "destructive",
            });
          } else {
            toast({ title: "Success", description: emailResponse.success });
          }
        }
      }
    });
  }

  return (
    <>
      <div key={"code"} className="flex w-full gap-2">
        <FormField
          control={form.control}
          name={"code"}
          render={({ field }) => (
            <FormItem className={"w-full"}>
              <FormControl>
                <Input
                  id={"code"}
                  type={"code".includes("password") ? "password" : "text"}
                  placeholder={"code"}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription />
            </FormItem>
          )}
        />
        <Button
          onClick={sendCode}
          disabled={!form.getValues("email")}
          type="button"
        >
          {isPending ? <LoaderCircle className="animate-spin" /> : "Send Code"}
        </Button>
      </div>
    </>
  );
}
