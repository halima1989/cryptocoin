'use client'


import React, { useEffect, useState } from 'react'
import { CryptoType} from '../Utils/types'
import { getAllCryptos } from '../Services/crypto'
import { Cryptocard } from '../Components/Crypto/Cryptocard'
import SearchCrypto from './searchCryptos'
import Header from '../Components/Forms/Header'


const page = () => {
  const [cryptosList, setCryptosList] = useState<CryptoType[]>([])

 

  return (
    <div  className="mt-8">
      <Header/>
      <SearchCrypto setCryptosList={setCryptosList}/>
      
      
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-auto"><a href="/crypto/create">Create a Crypto</a></button>
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
