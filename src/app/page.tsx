

"use client"
import { SetStateAction, useEffect, useState } from "react";
import { CryptoType } from "./Utils/types";
import Search from "./Components/Crypto/search";
import {  getAllCryptos } from "./Services/crypto";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
// 
  return (
                 
      <div className="border-2 border-gray-400 rounded-lg">
      <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1609554496796-c345a5335ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
  {/* <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div> */}
   
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
    {/* <div className="flex min-h-screen w-full items-center justify-center bg-gray-100"> */}
  <div className="flex w-full items-center justify-center space-x-4 mb-10 z-5">
    <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-white z-10">
    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      Log In 
    </button>
    <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-white z-10">
    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      Register
    </button>
  </div>
{/* </div> */}
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl z-5">Crypto Coin </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Rejoignez les millions d’européens qui font confiance à CryptoCoin pour acheter et vendre leur cryptomonnaies.</p>
    </div>
    
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none z-5">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <Link href="/crypto">All Cryptos <span aria-hidden="true">&rarr;</span></Link>
        <Link href="/offer">All Offers <span aria-hidden="true">&rarr;</span></Link>
        <Link href="/admin">Je suis l'ADMIN<span aria-hidden="true">&rarr;</span></Link>
       {/* <Link href="/trade/myTrades">My Trades<span aria-hidden="true">&rarr;</span></Link>
        <Link href="/promoCode">PromoCodes<span aria-hidden="true">&rarr;</span></Link>
        <Link href="/asset/usersAssets">UsersAssets<span aria-hidden="true">&rarr;</span></Link>
        <Link href="/asset/myAssets">My Assets<span aria-hidden="true">&rarr;</span></Link>
        <Link href="/offer/create">Create offer<span aria-hidden="true">&rarr;</span></Link>
        <Link href="/crypto/create">Create Crypto<span aria-hidden="true">&rarr;</span></Link>
        <Link href="/promocode/create">Create promocode<span aria-hidden="true">&rarr;</span></Link>
         */}
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Cryptos per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">140</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Users per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Offers per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">100</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
        
      </dl>
    </div>
  </div>
</div>



  </div>
)
}
