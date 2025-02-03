import React from "react";
import Image from 'next/image'
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Button } from "@/components/ui/button";
import cta from '@/public/images/cta.png'

const Cta = () => {
  return (
    <div className={'w-full bg-primary-gradient'}>
      <MaxwidthWrapper className={'flex flex-col justify-center items-center'}>
        <h2 className={'font-bold text-[42px] text-white text-center mt-28'}>Tunggu apa lagi? <br/> Ayo Buat Undangan Pernikahanmu Sekarang!</h2>
        <Button variant={'secondary'} className={'mt-6 text-white mx-auto relative'}>Explore Templates</Button>
        <Image src={cta} alt={'Ayo buat undanganmu segera'} className={'mt-28'} />
      </MaxwidthWrapper>
    </div>
  );
};
export default Cta;
