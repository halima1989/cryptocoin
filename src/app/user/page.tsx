import Link from 'next/link'
import React from 'react'
import Header from '../Components/Forms/Header'
import Footer from '../Components/Forms/Footer'

const page = () => {

  return (
    <div>
      <Header />
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 bg-gray-800">
          <Link href="/crypto">Cryptos <span aria-hidden="true">&rarr;</span></Link>
          <Link href="/offer">Offers <span aria-hidden="true">&rarr;</span></Link>
          <Link href="/trade/myTrades">My Trades<span aria-hidden="true">&rarr;</span></Link>
          <Link href="/asset/myAssets">My Assets<span aria-hidden="true">&rarr;</span></Link>
          <Link href="/offer/create">Create offer<span aria-hidden="true">&rarr;</span></Link>
          <Link href="/crypto/create">Create Crypto<span aria-hidden="true">&rarr;</span></Link>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
