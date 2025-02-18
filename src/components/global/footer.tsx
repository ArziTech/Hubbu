import React from "react";
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";

const Footer = () => {
  return (
    <div className={"mt-12 border-t border-border bg-background"}>
      <MaxwidthWrapper>
        <div
          className={
            "flex h-[175px] flex-col items-center text-center" +
            " justify-center gap-4"
          }
        >
          <p>Made by arzi</p>
          <p>&#169; {new Date().getFullYear()} All right reserved</p>
        </div>
      </MaxwidthWrapper>
    </div>
  );
};
export default Footer;
