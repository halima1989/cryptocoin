
"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { schema } from '../validation/validateurForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerUser } from '../Services/auth';
import { useRouter } from 'next/navigation';
// regex email
// /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

type UserFormType = {
  firstName: string;
  lastName: string;
  pseudo: string;
  city: string;
  email: string;
  age: number;
  promoCode?: string;
  password: string;

};


const Register = () => {

  const { push } = useRouter()
  const { handleSubmit, register, formState: { errors } } = useForm<UserFormType>({
    mode: "all", resolver: yupResolver(schema), defaultValues: {
      firstName: "firstName", lastName: "lastName", pseudo: "pseudo", city: "city", email: "email", password: "password", promoCode: "promoCode", age: 20
    }
  });

  const onSubmit = (data: UserFormType) => {
    registerUser(data).then((res) => {
      localStorage.setItem("token", res.data.access_token)

      push("/login")

    }).catch((e) => console.log(e))

  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="fisrtName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name             </label>
            <div className="mt-2">
              <input

                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('firstName', { required: "champs obligatoire" })}
              />
              {errors?.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}

            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('lastName', { required: "champs obligatoire" })}
              />
              {errors?.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="pseudo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pseudo              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('pseudo', { required: "champs obligatoire" })}
              />
              {errors?.pseudo && <p className='text-red-500'>{errors.pseudo.message}</p>}

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('city', { required: "champs obligatoire" })}
              />
              {errors?.city && <p className='text-red-500'>{errors.city.message}</p>}

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <input
                type="email"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('email', { required: "champs obligatoire" })}
              />
              {errors?.email && <p className='text-red-500'>{errors.email.message}</p>}

            </div>
          </div>


          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('password', { required: "champs obligatoire" })}
              />
              {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="promoCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PromoCode
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('promoCode')}
              />
              {errors?.promoCode && <p className='text-red-500'>{errors.promoCode.message}</p>}

            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
            </div>
            <div className="mt-2">
              <input
                id="age"
                type="text"

                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('age', { required: true })}
              />
              {errors?.age && <p className='text-red-500'>{errors.age.message}</p>}

            </div>
          </div>

          <div>
            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register;
