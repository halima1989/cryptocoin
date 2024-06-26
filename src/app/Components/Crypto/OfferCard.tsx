"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { OffersProps } from '../../Utils/types'
import { Cryptocard } from './Cryptocard'
import { buyOffer } from '@/app/Services/offer'
import toast from 'react-hot-toast'


export const OfferCard = ({
    offer,
    setIsReloadNeeded,
    isBuyVisible
  }: {
    offer: OffersProps
    setIsReloadNeeded: Dispatch<SetStateAction<boolean>>
    isBuyVisible :boolean
  }) => {
    function handleCryptoBuyViaOffer(offerId: string) {
      buyOffer(offerId)
        .then((res) => {
          if (res.data) {
            if (res.status === 204) {
              toast.error('Item already sold')
            }
  
            if (res.status === 201) {
              toast.success('Success')
              setIsReloadNeeded(true)
            }
          }
        })
        .catch((e) => {
          if (e) {
            toast.error('error')
            console.log(e)
          }
        })
    }
  
    return (
      <div >
        <p>Number of tokens: {offer.amount}</p>
        <p>Seller: {offer.User.pseudo}</p>
        <Cryptocard crypto={offer.Crypto} isBuyVisible={isBuyVisible} />
        <div className="w-full flex justify-end gap-6">
          {/* <button
            className="bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
            onClick={() => {
              handleCryptoBuyViaOffer(offer.id)
            }}
          >
            Buy
          </button> */}
        </div>
      </div>
    )
  }
  