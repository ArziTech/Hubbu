import React from "react";
import Image from "next/image";
import notFoundImage from "@/public/images/not-found.png";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigLeft, House } from "lucide-react";
import BackButton from "@/components/global/back-button";

const NotFound = () => {
  return (
    <section className={"flex flex-grow flex-col items-center"}>
      <MaxwidthWrapper
        className={
          "flex h-full flex-grow flex-col items-center gap-12 tablet:flex-row"
        }
      >
        <div className={"space-y-2 text-center tablet:text-start"}>
          <h1 className={"text-7xl font-bold text-primary"}>Sorry</h1>
          <p className={"text-2xl text-text"}>
            The page that you were looking couldn&apos;t be found
          </p>
          <div className="flex w-full gap-4">
            <BackButton />
            <Button asChild className={"!mt-8 w-full"}>
              <Link href={"/"}>
                <House className={"font-black"} />
                Back to home
              </Link>
            </Button>
          </div>
        </div>
        <Image
          alt={"sorry 404 not found"}
          src={notFoundImage}
          className={"order-first mt-32 tablet:order-last tablet:mt-0"}
        />
      </MaxwidthWrapper>
    </section>
  );
};
export default NotFound;
