import axios from "axios"
import { createCryptoType } from "../Utils/types"

export async function getAllCryptos() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
    return axios
      .get(
        url,
  
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  
  export async function buyCrypto(cryptoid: string, amount: number) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
    return axios
      .post(
        url,
        {
          id_crypto: cryptoid,
          amount: amount,
        },
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  
  export async function createCrypto (crypto:createCryptoType) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
    return axios
      .post(
        url,
        {
          name: crypto.name,
          value: crypto.value,
          quantity: crypto.quantity,
          image:crypto.image,
        },
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  


export async function fetchCryptoSearch(name: string|undefined) {
  const URL=`${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`;

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(
      URL,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
};

export async function updateCrypto(cryptoid: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/update/{cryptoid}}`

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .patch(
      url,
      {
        id_crypto: cryptoid,
      
      },
      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}
export async function deleteCrypto(cryptoid:string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/delete/${cryptoid}`

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .delete(
      url,
      
      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
};


export async function getHistoryCrypto(cryptoid:string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/history/${cryptoid}`

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}
