"use client"
import React, { Dispatch, SetStateAction } from 'react'
import {  tradeType } from '../../Utils/types'
import { Cryptocard } from './Cryptocard'


export const TradeCard = ({
    trade,
    setIsReloadNeeded,
    isBuyVisible
  }: {
   trade: tradeType
    setIsReloadNeeded: Dispatch<SetStateAction<boolean>>
    isBuyVisible :boolean
  }) => {
 
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-2 space-y-1 space-x-1">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div className="bg-gray-100 p-1 rounded-lg text-xs">
    <h3 className="text-xs font-semibold">Giver's Information</h3>
        <p> first name: {trade.Giver.firstName}</p>
        <p> last name: {trade.Giver.lastName}</p>
        <p> pseudo: {trade.Giver.pseudo}</p>
        <p> dollarAvailables: {trade.Giver.dollarAvailables}</p>
    </div>
     <div className="bg-gray-100 p-1 rounded-lg text-xs">
     <h3 className="text-xs font-semibold ">Receiver's Information</h3>
        <p> first name: {trade.Receiver.firstName}</p>
        <p> last name: {trade.Receiver.lastName}</p>
        <p> pseudo: {trade.Receiver.pseudo}</p>
        <p> dollarAvailables: {trade.Receiver.dollarAvailables}</p>
     </div >
     </div>
     <div className="bg-gray-100 p-1 rounded-lg text-xs">
     <h3 className="text-xs font-semibold">Cryptocurrency</h3>
        <Cryptocard crypto={trade.Crypto} isBuyVisible={isBuyVisible}  />
        </div>
     </div>

    )
  }
  