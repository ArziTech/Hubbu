import React from "react";
import { LoginForm } from "@/components/login-form";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import hubbu from '@/public/logo/hubbu-horizontal-white.svg'
import Image from 'next/image'

const Page = () => {
  return (
    <div className={'w-full h-screen bg-card'}>
      <MaxwidthWrapper className={'h-screen !p-6 flex items-center gap-6'}>
        <div className={'hidden desktop:block desktop:w-1/2 bg-primary-gradient rounded-2xl p-6 h-full'}>
          <div className={'w-[112px] h-[52px] '}>
            <Image src={hubbu} alt={'hubbu'}></Image>
          </div>
        </div>
        {/*<div className={'w-1/2'}></div>*/}
        <LoginForm className={'w-full desktop:w-1/2 max-w-[500px] h-full mx-auto'}></LoginForm>
      </MaxwidthWrapper>
    </div>
  );
};
export default Page;
