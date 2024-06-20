"use client"

import { CryptoType, assetsType } from '@/app/Utils/types'
import React from 'react'
import { Cryptocard } from './Cryptocard'

export const AssetsCard = ({
  assets


}: {
             assets : assetsType


}) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg text-center">
   
    <p className="text-sm">First name: {assets.firstName}</p>
    <p className="text-sm">Last name: {assets.lastName}</p>
    <p className="text-sm">dollarAvailables: {assets.dollarAvailables}</p>
    <p className="text-sm">Pseudo: {assets.pseudo}</p>
    <p className="text-sm">Age: {assets.age}</p>
    <h3>Assets:</h3>
      {assets.UserHasCrypto.map((cryptoAsset:any) => (
       
        <div key={cryptoAsset.id}>
          <Cryptocard crypto={cryptoAsset.Crypto} isBuyVisible={false} />
          <p className="text-sm">Amount: {cryptoAsset.amount}</p>
          <p className="text-sm">ID: {cryptoAsset.id}</p>
        </div>
      ))}
  </div>
  )
}
