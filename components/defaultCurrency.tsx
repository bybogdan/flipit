'use client'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { LC_CURRENCY, cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const currencyNames = ['USD', 'EUR', 'GEL', 'RUB']

export const DefaultCurrency = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialCurrency = searchParams.get('c') ?? ''

  const [isLoaded, setIsLoaded] = useState(false)
  const [curenciesOptions, setCurenciesOptions] = useState<{
    [key: string]: boolean
  }>({
    USD: false,
    EUR: false,
    GEL: false,
    RUB: false,
    [initialCurrency]: true,
  })

  useEffect(() => {
    router.replace('/settings')
    const currency = localStorage.getItem(LC_CURRENCY) || 'USD'
    setCurenciesOptions(() => ({
      USD: false,
      EUR: false,
      GEL: false,
      RUB: false,
      [currency]: true,
    }))
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col gap-8">
      {currencyNames.map((currency) => {
        return (
          <div
            key={currency}
            className="flex items-center space-x-2 gap-4 justify-center"
          >
            <Switch
              checked={curenciesOptions[currency]}
              onCheckedChange={(checked) => {
                if (typeof window !== 'undefined') {
                  localStorage.setItem(LC_CURRENCY, currency)
                  if (!checked && !!curenciesOptions[currency]) {
                    return
                  }
                  setCurenciesOptions(() => ({
                    USD: false,
                    EUR: false,
                    GEL: false,
                    RUB: false,
                    [currency]: checked,
                  }))
                }
              }}
              id={currency}
              isLoaded={isLoaded}
            />
            <Label
              htmlFor={currency}
              className="max-w-xl text-2xl cursor-pointer"
            >
              {currency}
            </Label>
          </div>
        )
      })}
    </div>
  )
}
