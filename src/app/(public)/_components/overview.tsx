import React from "react";
import Image from 'next/image'

import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";

import overviewImage from '@/public/images/overview-image.png'
import { Button } from "@/components/ui/button";

const Overview = () => {
  return (
    <div className={'w-full h-[1429px] tablet:h-[1533px] desktop:h-[1648px] bg-primary-gradient overflow-hidden'}>
      <MaxwidthWrapper className={'flex flex-col justify-center items-center' +
        ' h-full'}>
        <div className={'mb-20 space-y-2 text-center'}>
          <h2 className={'text-3xl desktop:text-4xl font-semibold text-accent text-center'}>Lebih dari 150 Template undangan yang tersedia</h2>
          <p className={'text-text text-xl desktop:text-2xl text-white'}>Banyak pilihan sesuai selera dan bisa dikustomisasi</p>
        </div>
        <Image src={overviewImage} className={'min-w-[827px]'} alt={'banyak pilihan template'}></Image>
        <Button variant={'default'} className={'mt-14 rounded-full text-xl' +
          ' font-medium p-4 hover:bg-accent'}>View all templates</Button>
      </MaxwidthWrapper>
    </div>
  );
};
export default Overview;
