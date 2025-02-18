import React from "react";
import { LoginForm } from "@/components/login-form";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import hubbu from "@/public/logo/hubbu-horizontal-white.svg";
import Image from "next/image";
import { RegisterForm } from "@/components/register-form";

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
        <RegisterForm
          className={"mx-auto h-full w-full max-w-[500px] desktop:w-1/2"}
        ></RegisterForm>
      </MaxwidthWrapper>
    </div>
  );
};
export default Page;
