"use client"
import { createCrypto } from '@/app/Services/crypto';
import { createCryptoType } from '@/app/Utils/types';
import { schema } from '@/app/validation/validateurCreateCrypto';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';

const page = () => {

  ;
  const { push } = useRouter()
  const { handleSubmit, register, formState: { errors } } = useForm<createCryptoType>({
    mode: "all", resolver: yupResolver(schema), defaultValues: {
      name: "name", value: 1, quantity: 1, image: "image"
    }
  });

  const onSubmit = (data: createCryptoType) => {
    createCrypto(data).then((res) => {
      localStorage.setItem("token", res.data.access_token)

      push("/crypto/all")

    }).catch((e) => console.log(e))

  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Crypto
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
                htmlFor="lastName"
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="value"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Quantity              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('quantity', { required: "champs obligatoire" })}
              />
              {errors?.quantity && <p className='text-red-500'>{errors.quantity.message}</p>}

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                image
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('image', { required: "champs obligatoire" })}
              />
              {errors?.image && <p className='text-red-500'>{errors.image.message}</p>}

            </div>
          </div>

          <div>
            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
export default page;

