'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

type SwitchPrimitivesRootType = typeof SwitchPrimitives.Root

interface SwitchPrimitivesRootWithExtraType
  extends React.ComponentPropsWithoutRef<SwitchPrimitivesRootType> {
  isLoaded: boolean
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchPrimitivesRootWithExtraType
>(({ className, isLoaded, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 dark:data-[state=checked]:bg-white dark:data-[state=unchecked]:bg-slate-800 data-[state=checked]:bg-black data-[state=unchecked]:bg-slate-200',
      className,
      !isLoaded && 'animate-pulse rounded-full bg-slate-200 dark:bg-slate-800'
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-black bg-white',
        !isLoaded && 'bg-slate-200 dark:bg-slate-800'
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
