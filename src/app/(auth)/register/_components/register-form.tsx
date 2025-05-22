"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { registerSchema } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { registerAction } from "@/actions/auth";
import GoogleButton from "@/components/global/google-button";
import RegisterFormFields from "@/app/(auth)/register/_components/register-form-fields";
import SendCodeButton from "@/app/(auth)/register/_components/send-code-button";
import SubmitButton from "@/app/(auth)/register/_components/submit-button";

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      code: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    startTransition(async function () {
      const response = await registerAction(values);
      if (response.status === "ERROR" || response.error) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
      } else if (response.status === "SUCCESS") {
        toast({
          title: "Succes",
          description: response.success,
        });
      }
    });
  }

  return (
    <div
      className={
        "relative mx-auto flex h-full w-full max-w-[500px] flex-col justify-center gap-6 desktop:w-1/2"
      }
    >
      <Button variant={"link"} asChild className={"absolute right-0 top-0"}>
        <Link href={"/login"}>Login</Link>
      </Button>

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create Hubbu Account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Welcome to Hubbu
        </p>
      </div>
      <Form {...form}>
        <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
          <RegisterFormFields form={form} />
          <SendCodeButton form={form} />
          <SubmitButton isPending={isPending}></SubmitButton>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </form>
      </Form>
      <GoogleButton />

      <div className="text-center text-sm">
        <a href="#">Forgot Password ?</a>
      </div>
      <div className="text-center text-sm">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4">
          Terms of Service{" "}
        </a>
        and{" "}
        <a href="#" className="underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
