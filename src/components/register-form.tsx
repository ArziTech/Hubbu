import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import google from "@/public/logo/google.svg";
import Link from "next/link";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form
      className={cn("relative flex flex-col justify-center gap-6", className)}
      {...props}
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
      <div className="grid gap-6">
        <div className="grid gap-2">
          {/*<Label htmlFor="email">Email</Label>*/}
          <Input id="name" type="text" placeholder="name" required />
        </div>
        <div className="grid gap-2">
          {/*<Label htmlFor="email">Email</Label>*/}
          <Input id="email" type="email" placeholder="email" required />
        </div>
        <div className="grid gap-2">
          {/*<div className="flex items-center">*/}
          {/*  <Label htmlFor="password">Password</Label>*/}
          {/*  <a*/}
          {/*    href="#"*/}
          {/*    className="ml-auto text-sm underline-offset-4 hover:underline"*/}
          {/*  >*/}
          {/*    Forgot your password?*/}
          {/*  </a>*/}
          {/*</div>*/}
          <Input
            id="password"
            type="password"
            placeholder={"password"}
            required
          />
        </div>
        <div className="grid gap-2">
          <Input
            id="password"
            type="password"
            placeholder={"password confirmation"}
            required
          />
        </div>
        <div className="flex gap-2">
          <Input id="password" type="password" placeholder={"code"} required />
          <Button>Send Code</Button>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <Image src={google} alt={"google"} />
          Login with Google
        </Button>
      </div>
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
    </form>
  );
}
