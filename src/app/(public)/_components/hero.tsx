import React from "react";
import Image from "next/image";
import hero from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div
      className={"w-[1000px] h-[770px] border border-border mx-auto" +
        "  overflow-hidden relative"}>
    <Image src={hero} alt={"gambar bunga"}
           className={" absolute object-bottom"} />
    <h1 className={"text-6xl tracking-tighter mt-[136px] text-center relative" +
      "  font-nova-square"}>
      <span className={'bg-gradient-to-tl from-[#FBC2EB] to-[#A18CD1]' +
        ' bg-clip-text text-transparent'}>Website undangan digital elegan yang praktis dan berkesan</span></h1>
  </div>);
};
export default Hero;
