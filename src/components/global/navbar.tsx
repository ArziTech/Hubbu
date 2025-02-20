import React from "react";
import Image from "next/image";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import hubbuHorizontal from "../../../public/logo/hubbu-horizontal.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav
      className={
        "fixed left-0 right-0 z-10 border-b bg-background" + " border-border"
      }
    >
      <MaxwidthWrapper>
        <div className={"flex w-full items-center justify-between"}>
          <Image src={hubbuHorizontal} alt={"hubbu"} width={220} height={90} />
          <div className={"flex items-center gap-4"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/templates"}>Templates</Link>
            <Link href={"/contact"}>Contact</Link>
            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
            <Button asChild>
              <Link href={"/register"}>Register</Link>
            </Button>
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  );
};
export default Navbar;
