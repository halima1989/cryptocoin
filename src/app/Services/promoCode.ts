import axios from "axios"
import { promoCodeType } from "../Utils/types"

export async function createPromoCode(promo:promoCodeType) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/create`
  
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
          name: promo.name,
          value: promo.value,
         
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
  

  export async function getAllPromoCode() {
    let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`
  
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
  
  
  export async function updatePromoCode(id:string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/update/${id}`
  
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
  
  
  export async function deletePromoCode(id:string) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/delete/${id}`
  
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
  