'use client'
import { AssetsCard } from "@/app/Components/Crypto/assetsCard"
import Footer from "@/app/Components/Forms/Footer"
import Header from "@/app/Components/Forms/Header"
import { getUsersAssets } from "@/app/Services/offer"
import { assetsType } from "@/app/Utils/types"
import { useEffect, useState } from "react"



const page = () => {
  const [assetsList, setAssetsList] = useState<assetsType[]>([])
  const [isReloadNeeded, setIsReloadNeeded] = useState(false)



  useEffect(() => {
    getUsersAssets()
      .then((res) => {
        setAssetsList(res.data)
        setIsReloadNeeded(true)
      })
      .catch((e) => {
        setIsReloadNeeded(false)
        console.log(e)
      })
  }, [isReloadNeeded])

  return (

    <div><Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

        {assetsList &&
          assetsList?.map((asset: any) => {
            return (
              <div
                key={asset.id}

              // className="border-2 border-solid w-80
              // h-80 rounded-md m-8 p-4 "
              >

                <AssetsCard assets={asset} />

              </div>
            )
          })}
      </div>
      <Footer />
    </div>

  )
}

export default page
