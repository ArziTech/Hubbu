import React, { ReactNode } from "react";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"flex w-full flex-col"}>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default Layout;
