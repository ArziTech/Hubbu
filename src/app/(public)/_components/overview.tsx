import React from "react";
import Image from "next/image";

import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";

import overviewImage from "@/public/images/overview-image.png";
import { Button } from "@/components/ui/button";

const Overview = () => {
  return (
    <div
      className={
        "bg-primary-gradient h-[1429px] w-full overflow-hidden tablet:h-[1533px] desktop:h-[1648px]"
      }
    >
      <MaxwidthWrapper
        className={"flex flex-col items-center justify-center" + " h-full"}
      >
        <div className={"mb-20 space-y-2 text-center"}>
          <h2
            className={
              "text-center text-3xl font-semibold text-accent desktop:text-4xl"
            }
          >
            Lebih dari 150 Template undangan yang tersedia
          </h2>
          <p className={"text-xl text-text text-white desktop:text-2xl"}>
            Banyak pilihan sesuai selera dan bisa dikustomisasi
          </p>
        </div>
        <Image
          src={overviewImage}
          className={"min-w-[827px]"}
          alt={"banyak pilihan templates"}
        ></Image>
        <Button
          variant={"default"}
          className={
            "mt-14 rounded-full text-xl" + " p-4 font-medium hover:bg-accent"
          }
        >
          View all templates
        </Button>
      </MaxwidthWrapper>
    </div>
  );
};
export default Overview;
