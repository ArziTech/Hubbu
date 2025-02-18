import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxwidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 desktop:max-w-[1000px] desktop:p-0",
        className,
      )}
    >
      {children}
    </div>
  );
};
export default MaxwidthWrapper;
