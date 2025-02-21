import React from "react";
import Image from "next/image";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import hubbuHorizontal from "../../../public/logo/hubbu-horizontal.svg";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav
      className={
        "fixed left-0 right-0 z-10 border-b bg-background" + " border-border"
      }
    >
      <MaxwidthWrapper>
        <div className={"flex w-full items-center justify-between"}>
          <Image src={hubbuHorizontal} alt={"hubbu"} width={147} height={60} />
          <div className={"flex items-center gap-4"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/templates"}>Templates</Link>
            <Link href={"/contact"}>Contact</Link>
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Avatar>{session.user.name}</Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuRadioItem
                    value={"login"}
                    className={cn(
                      buttonVariants({ variant: "destructive" }),
                      "w-full",
                    )}
                    onClick={async () => {
                      "use server";
                      await signOut({ redirectTo: "/login" });
                    }}
                  >
                    <LogOut /> Log Out
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild>
                  <Link href={"/login"}>Login</Link>
                </Button>
                <Button asChild>
                  <Link href={"/register"}>Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  );
};
export default Navbar;
