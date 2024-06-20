"use client"
import { AssetsCard } from "@/app/Components/Crypto/assetsCard"
import Header from "@/app/Components/Forms/Header"
import { getMyAssets } from "@/app/Services/offer"
import { assetsType } from "@/app/Utils/types"
import { useEffect, useState } from "react"



const page = () => {
    const [assetsList, setAssetsList] = useState<assetsType>()
    const [isReloadNeeded, setIsReloadNeeded] = useState(false)
   
    useEffect(() => {
      getMyAssets()
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
      <div>
       
      <div className="flex flex-wrap items-center">
        <Header/>
        
     {!isReloadNeeded ? "chargement" : ( <AssetsCard  assets={assetsList!}/>)  }
           
                </div>
           
      </div>
    
    )
  }
  
  export default page
  