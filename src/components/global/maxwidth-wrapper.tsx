import React, {ReactNode} from 'react'
import {cn} from '@/lib/utils'

const MaxwidthWrapper = ({className, children}:{ className?:string, children: ReactNode}) => {
  return (
      <div className={cn('lg:max-w-[1000px] w-full mx-auto', className)}>{children}</div>
  )
}
export default MaxwidthWrapper
