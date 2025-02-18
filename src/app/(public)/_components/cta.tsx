import React from "react";
import Image from "next/image";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Button } from "@/components/ui/button";
import cta from "@/public/images/cta.png";

const Cta = () => {
  return (
    <div className={"bg-primary-gradient w-full"}>
      <MaxwidthWrapper className={"flex flex-col items-center justify-center"}>
        <h2
          className={
            "mt-12 text-center text-2xl font-bold text-white tablet:mt-20 tablet:text-4xl desktop:mt-28 desktop:text-[42px]"
          }
        >
          Tunggu apa lagi? <br /> Ayo Buat Undangan Pernikahanmu Sekarang!
        </h2>
        <Button
          variant={"secondary"}
          className={"relative mx-auto mt-6 text-white"}
        >
          Explore Templates
        </Button>
        <Image
          src={cta}
          alt={"Ayo buat undanganmu segera"}
          className={"mt-28"}
        />
      </MaxwidthWrapper>
    </div>
  );
};
export default Cta;
