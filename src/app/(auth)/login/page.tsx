import React from "react";
import { LoginForm } from "@/components/login-form";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import hubbu from "@/public/logo/hubbu-horizontal-white.svg";
import Image from "next/image";
import GoogleButton from "@/components/global/google-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className={"h-screen w-full bg-card"}>
      <MaxwidthWrapper className={"flex h-screen items-center gap-6 !p-6"}>
        <div
          className={
            "bg-primary-gradient hidden h-full rounded-2xl p-6 desktop:block desktop:w-1/2"
          }
        >
          <div className={"h-[52px] w-[112px]"}>
            <Image src={hubbu} alt={"hubbu"}></Image>
          </div>
        </div>
        {/*<div className={'w-1/2'}></div>*/}
        <div className="relative mx-auto flex h-full w-full max-w-[500px] flex-col justify-center gap-6 desktop:w-1/2">
          <Button variant="link" asChild className="absolute right-0 top-0">
            <Link href="/register">Register</Link>
          </Button>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <LoginForm />
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <GoogleButton />
          <div className="text-center text-sm">
            <a href="#">Forgot Password?</a>
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
      </MaxwidthWrapper>
    </div>
  );
};
export default Page;
