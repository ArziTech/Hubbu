import React from 'react'
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";

const Footer = () => {
  return (
      <div className={'bg-background border-t border-border mt-12'}>
        <MaxwidthWrapper >
          <div className={'text-center h-[175px] flex flex-col items-center' +
            ' justify-center gap-4'}>

          <p>Made by arzi</p>
          <p>&#169; {new Date().getFullYear()} All right reserved</p>
          </div>
        </MaxwidthWrapper>
      </div>
  )
}
export default Footer
