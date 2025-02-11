import React, {ReactNode} from 'react'
import {cn} from '@/lib/utils'

const MaxwidthWrapper = ({className, children}:{ className?:string, children: ReactNode}) => {
  return (
      <div className={cn('desktop:max-w-[1000px] desktop:p-0 px-4 w-full mx-auto', className)}>{children}</div>
  )
}
export default MaxwidthWrapper
