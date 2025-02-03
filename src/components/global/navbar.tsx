import React from 'react'
import Image from 'next/image'
import MaxwidthWrapper from "@/components/global/maxwidth-wrapper";
import hubbuHorizontal from  '../../../public/logo/hubbu-horizontal.svg'
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Navbar = () => {
  return (
      <nav className={'fixed z-10 left-0 right-0 bg-background border-b' +
        ' border-border'}>
        <MaxwidthWrapper>
          <div className={'w-full flex justify-between items-center'}>
            <Image
                src={hubbuHorizontal}
                alt={'hubbu'}
                width={220}
                height={90}
            />
            <div className={'flex gap-4 items-center'}>
              <Link href={'/'}>Home</Link>
              <Link href={'/templates'}>Templates</Link>
              <Link href={'/contact'}>Contact</Link>
              <Button>Login</Button>
              <Button>Register</Button>
            </div>
          </div>
        </MaxwidthWrapper>
      </nav>
  )
}
export default Navbar
