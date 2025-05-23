import React from "react";
import Image from "next/image";
import bg from "@/public/images/contact_bg.png";
import logo from "@/public/logo/hubbu-logo.svg";
import gmail from "@/public/icons/gmail.svg";
import wa from "@/public/icons/wa.svg";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import Link from "next/link";

const Page = () => {
  return (
    <div className={"relative h-full flex-grow"}>
      <Image
        src={bg}
        alt={"bg"}
        className={"absolute -bottom-48 -z-10 w-full"}
        quality={100}
      />
      <MaxwidthWrapper
        className={"flex h-full flex-col items-center justify-center"}
      >
        <Image src={logo} alt={"Hubbu Logo"} className={"size-48"}></Image>
        <p className={"text-5xl"}>Need Help?</p>
        <h2 className={"font-nova-square text-7xl"}>Contact Our Team</h2>
        <div className={"mt-8 flex gap-4"}>
          <Link href={"https://wa.me/+6285173050210"}>
            <div
              className={
                "flex h-[200px] w-[300px] flex-col justify-between rounded-md border-2 border-primary bg-white p-4"
              }
            >
              <Image src={wa} alt={"whatsapp icon"}></Image>
              <div>
                <p className={"text-2xl font-medium"}>Whatsapp</p>
                <p className={"text-lg"}>+62 851 7305 0210</p>
              </div>
            </div>
          </Link>
          {/*<Link href={""}>*/}
          <div
            className={
              "flex h-[200px] w-[300px] flex-col justify-between rounded-md border-2 border-primary bg-white p-4"
            }
          >
            <Image src={gmail} alt={"gmail icon"}></Image>
            <div>
              <p className={"text-2xl font-medium"}>Email</p>
              <p className={"text-lg"}>arzibusiness1@gmail.com</p>
            </div>
          </div>
          {/*</Link>*/}
        </div>
      </MaxwidthWrapper>
    </div>
  );
};
export default Page;
