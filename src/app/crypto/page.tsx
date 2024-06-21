'use client'


import React, { useEffect, useState } from 'react'
import { CryptoType } from '../Utils/types'
import { getAllCryptos } from '../Services/crypto'
import { Cryptocard } from '../Components/Crypto/Cryptocard'
import SearchCrypto from './searchCryptos'
import Header from '../Components/Forms/Header'
import Footer from '../Components/Forms/Footer'


const page = () => {
  const [cryptosList, setCryptosList] = useState<CryptoType[]>([])



  return (
    <div className="mt-8">
      <Header />
      <br />
      <SearchCrypto setCryptosList={setCryptosList} />

      <div className="flex items-center justify-center bg-gray-100 mt-8 ">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 mb-8"><a href="/crypto/create">Create CryptoCurrency</a></button></div>
      <div className="flex flex-wrap items-center mt-4">

        {cryptosList &&
          cryptosList?.map((crypto) => {
            return (
              <div
                key={crypto.id}
                className="border-2 border-solid w-80 h-80 rounded-md m-8 p-4 "
              >
                <Cryptocard crypto={crypto} isBuyVisible={true} />
              </div>
            )
          })}
      </div>

    </div>
  )
}

export default page
