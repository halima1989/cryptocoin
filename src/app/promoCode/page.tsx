'use client'

import React, { useEffect, useState } from 'react'
import { promoCodeType } from '../Utils/types'
import { getAllPromoCode } from '../Services/promoCode'
import { PromoCodeCard } from '../Components/Crypto/PromoCodeCard'
import Header from '../Components/Forms/Header'
import Footer from '../Components/Forms/Footer'



const page = () => {
  const [promoCodeList, setPromoCodeList] = useState<promoCodeType[]>([])
  const [isReloadNeeded, setIsReloadNeeded] = useState(false)

  useEffect(() => {
    getAllPromoCode()
      .then((res) => {
        setPromoCodeList(res.data)
        setIsReloadNeeded(false)
      })
      .catch((e) => {
        setIsReloadNeeded(false)
        console.log(e)
      })
  }, [isReloadNeeded])

  return (
    <div>

      <div className="flex flex-wrap items-center">

        {promoCodeList &&
          promoCodeList?.map((promoCode) => {
            return (
              <div
                key={promoCode.id}
                className="border-2 border-solid w-80 h-40 rounded-md m-8 p-4 "
              >
                <Header />
                <PromoCodeCard promoCode={promoCode} setIsReloadNeeded={setIsReloadNeeded} />
              </div>
            )
          })}
      </div>
      <Footer />
    </div>
  )
}

export default page
