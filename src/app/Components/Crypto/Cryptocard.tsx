
"use client"

import { CryptoType } from '@/app/Utils/types'
import React from 'react'
import { BuyCryptoModal } from './buyCryptoModal'

export const Cryptocard = ({
  crypto,
  isBuyVisible,
}: {
  crypto: CryptoType
  isBuyVisible:  boolean
}) => {
  return (
    <div>
      <div className="flex flex-row flex-end"></div>
      <img
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48 object-cover"
      />
      <p>{crypto.name}</p>

      <p className="text-sm">Value: {crypto.value}</p>
      <p className="text-sm">Remaining Quantity on server: {crypto.quantity}</p>
      {isBuyVisible && <BuyCryptoModal crypto={crypto} />} </div>
  )
}
