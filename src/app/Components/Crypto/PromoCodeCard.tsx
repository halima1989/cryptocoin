
"use client "

import { promoCodeType } from "@/app/Utils/types"
import { Dispatch, SetStateAction } from "react"


export const PromoCodeCard = ({
    promoCode,
    setIsReloadNeeded,

  }: {
    promoCode : promoCodeType
    setIsReloadNeeded: Dispatch<SetStateAction<boolean>>

   
  }) => {
  
    return (
        <div className="border p-6 rounded-lg shadow-lg text-center">
          <p>Id: {promoCode.id}</p>
          <p className="text-sm">Name: {promoCode.name}</p>
          <p className="text-sm">Value: {promoCode.value}</p>
        </div>
    )
  }
  