
"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (


    <div className="border-2 rounded-lg">


      <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ")' }}>
        {/* <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
  </div> */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* <div className="flex min-h-screen w-full items-center justify-center bg-gray-100"> */}
            <div className="flex w-full items-center justify-center space-x-4 mb-10 ">
              {/* <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-white ">
                {/* <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30 z-0"></div> */}
              {/* <a href="/register">Register</a> */}
              {/* </button>
            <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-white "> */}
              {/* <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30 z-0"></div> */}
              {/* <a href="/login">Log in</a> */}
              {/* </button> */}
            </div>
            {/* </div> */}
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-8xl ">Crypto Coin </h2>
            <p className="mt-6 text-lg leading-8 text-white font bold">Rejoignez les millions d’européens qui font confiance à CryptoCoin pour acheter et vendre leur cryptomonnaies.</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Header
