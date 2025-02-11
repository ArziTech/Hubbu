import React from "react";
import Image from "next/image";
import hero from "@/public/images/hero.png";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";

const Hero = () => {
  return (
    <div
      className={"w-full max-w-[360px] phone:max-w-[600px]  tablet:max-w-[960px] desktop:max-w-[1000px] tablet:h-[500px] desktop:h-[770px] h-[400px] border border-border mx-auto  overflow-hidden relative"}
    >
          <Image
            src={hero}
            alt={"gambar bunga"}
            className={"w-full bottom-0 object-fill absolute object-bottom"}
          />
      <h1
        className={"text-3xl tablet:text-5xl desktop:text-6xl tracking-tighter mt-16 desktop:mt-[136px] text-center relative" +
          "  font-nova-square"}
      >
          <span className={"bg-gradient-to-tl from-[#FBC2EB] to-[#A18CD1] bg-clip-text text-transparent"}>Website undangan digital elegan yang praktis dan berkesan</span>
      </h1>
    </div>
  );
};
export default Hero;
