import React from "react";
import Image from "next/image";
import hero from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div
      className={
        "relative mx-auto h-[400px] w-full max-w-[360px] overflow-hidden border border-border phone:max-w-[600px] tablet:h-[500px] tablet:max-w-[960px] desktop:h-[770px] desktop:max-w-[1000px]"
      }
    >
      <Image
        src={hero}
        alt={"gambar bunga"}
        className={"absolute bottom-0 w-full object-fill object-bottom"}
      />
      <h1
        className={
          "relative mt-16 text-center text-3xl tracking-tighter tablet:text-5xl desktop:mt-[136px] desktop:text-6xl" +
          " font-nova-square"
        }
      >
        <span
          className={
            "bg-gradient-to-tl from-[#FBC2EB] to-[#A18CD1] bg-clip-text text-transparent"
          }
        >
          Website undangan digital elegan yang praktis dan berkesan
        </span>
      </h1>
    </div>
  );
};
export default Hero;
