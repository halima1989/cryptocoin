
"use client"

import { CryptoType } from '@/app/Utils/types'
import React from 'react'
import { BuyCryptoModal } from './buyCryptoModal'

export const Cryptocard = ({
  crypto,
  isBuyVisible,
}: {
  crypto: CryptoType
  isBuyVisible: boolean
}) => {
  return (

    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{crypto.name}</h3>
        <p className="text-sm text-gray-600">Value: {crypto.value}</p>
        <p className="text-sm text-gray-600">
          Remaining Quantity on server: {crypto.quantity}
        </p>
        {isBuyVisible && <BuyCryptoModal crypto={crypto} />} </div>
    </div>

  )
}
