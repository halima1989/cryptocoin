"use client"

import { useEffect, useState } from "react"
import { getAllTrades } from "../Services/trade"
import { tradeType } from "../Utils/types"
import { TradeCard } from "../Components/Crypto/TradeCard"


const page = () => {
    const [TradesList, setTradesList] = useState<tradeType[]>([])
    const [isReloadNeeded, setIsReloadNeeded] = useState(false)
  
    useEffect(() => {
      getAllTrades()
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TradesList&&
          TradesList?.map((trade) => {
            return (
                
              <div
                key={trade.id}
              >
               <TradeCard trade={trade} setIsReloadNeeded={setIsReloadNeeded} isBuyVisible={false} />
              </div>
            )
          })}
      </div>
    )
  }
  
  export default page
  