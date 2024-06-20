"use client";

import { createOffer } from "@/app/Services/offer";
import { createOfferType } from "@/app/Utils/types";
import { schema } from "@/app/validation/validateurOffer";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


const page = () => {

    ;
    const {push} = useRouter()
    const { handleSubmit, register, formState: { errors } } = useForm<createOfferType>({mode:"all", resolver:yupResolver(schema), defaultValues:{
     amount : 10
      }});
      
      const onSubmit = (data:createOfferType) => {
         createOffer(data.id_crypto,data.amount).then((res)=>{
          localStorage.setItem("token",res.data.access_token)
    
          push("/offer")
    
         }).catch((e)=>console.log(e))
    
      };
       
      return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Create Offer
            </h2>
          </div>
    
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label
                  htmlFor="id_crypto"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
   id_crypto          </label>
                <div className="mt-2">
                  <input
                    
                    type="text"
        
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                    {...register('id_crypto', { required: "champs obligatoire" })}
                  />
               {errors?.id_crypto && <p className='text-red-500'>{errors.id_crypto.message}</p>}
    
                </div>
              </div>
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
   Amount          </label>
                <div className="mt-2">
                  <input
                    
                    type="text"
        
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                    {...register('amount', { required: "champs obligatoire" })}
                  />
               {errors?.amount && <p className='text-red-500'>{errors.amount.message}</p>}
    
                </div>
              </div>
              
            
              <div>
                <input
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  value= "submit"
                />          
              </div>
            </form>
          </div>
        </div>
      )}
      export default page;
    
    