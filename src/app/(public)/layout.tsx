import React, {ReactNode} from 'react'
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

const Layout = ({children}:{children: ReactNode}) => {
  return (
      <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </>
  )
}
export default Layout
