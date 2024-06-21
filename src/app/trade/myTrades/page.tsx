"use client"

import { TradeCard } from "@/app/Components/Crypto/TradeCard"
import Header from "@/app/Components/Forms/Header"
import { getMyTrades } from "@/app/Services/trade"
import { myTradesType } from "@/app/Utils/types"
import { useEffect, useState } from "react"



const page = () => {
  const [TradesList, setTradesList] = useState<myTradesType[]>([])
  const [isReloadNeeded, setIsReloadNeeded] = useState(false)

  useEffect(() => {
    getMyTrades()
      .then((res) => {
        setTradesList(res.data)
        setIsReloadNeeded(true)
      })
      .catch((e) => {
        setIsReloadNeeded(false)
        console.log(e)
      })
  }, [isReloadNeeded])
  console.log(setTradesList)

  return (
    <div> <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {TradesList &&
          TradesList?.map((trade) => {
            return (

              <div
                key={trade.id}
              >
                <TradeCard trade={trade} setIsReloadNeeded={setIsReloadNeeded} isBuyVisible={false} />
              </div>
            )
          })}
      </div></div>
  )
}

export default page
