"use client"
import { createPromoCode } from "@/app/Services/promoCode";
import { promoCodeType } from "@/app/Utils/types";
import { schema } from "@/app/validation/validateurPromoCode";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";


 


const page = () => {

    ;
    const {push} = useRouter()
    const { handleSubmit, register, formState: { errors } } = useForm<promoCodeType>({mode:"all", resolver:yupResolver(schema), defaultValues:{
      name:"name", value: 1
      }});
      
      const onSubmit = (data:promoCodeType) => {
         createPromoCode(data).then((res)=>{
          localStorage.setItem("token",res.data.access_token)
    
          push("/promoCode")
    
         }).catch((e)=>console.log(e))
    
      };
       
      return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Create PromoCode
            </h2>
          </div>
    
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
    Name            </label>
                <div className="mt-2">
                  <input
                    
                    type="text"
        
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                    {...register('name', { required: "champs obligatoire" })}
                  />
               {errors?.name && <p className='text-red-500'>{errors.name.message}</p>}
    
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="value"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
    Value
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                    {...register('value', { required: "champs obligatoire" })}
                    />
                  {errors?.value && <p className='text-red-500'>{errors.value.message}</p>}
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
    
    