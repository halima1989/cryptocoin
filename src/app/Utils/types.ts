export type AuthRegisterDto= {
    firstName: string,
    lastName: string,
    pseudo:	string,
    city: string,
    email :string,
    password: string,
    promoCode?: string,
    age : number,
    
    }
    
export type AuthLoginDto ={
    email:string;
    password :string;
}

export type CryptoType={
    id: string,
    name:string,
    value:string,
    quantity:number,
    image:string,
    created_at: string,
    updated_at:string
  }

  export type OffersProps = {
    id: string
    User: {
      pseudo: string
    }
    amount: number
    created_at: string
    id_user: string
    Crypto: CryptoType
  }
  export type createCryptoType = {
    name:string;
    value:number;
    quantity:number;
    image:string;
}

export type tradeType = {
  id:string,
  Giver: {
      firstName:string,
      lastName: string,
      pseudo: string,
      dollarAvailables: number
  },
  Receiver: {
      firstName: string,
      lastName: string,
      pseudo: string,
      dollarAvailables: number
  },
  Crypto: CryptoType
}
export type promoCodeType = {
  id?: string,
  name: string,
  value: number,
  created_at?: string,
  updated_at?: string
}

export type assetsType = {
  firstName: string,
  lastName: string,
  dollarAvailables: number,
  pseudo: string,
  age: number,
  UserHasCrypto: [
      {
          Crypto: CryptoType ,
          amount:number,
          id: string
      }
  
  ]
}

export type myTradesType = {
  id: string,
  id_giver:string,
  id_receiver: string,
  id_crypto: string,
  amount_traded: number,
  created_at: string,
  updated_at: string,
  Crypto: {
      id:string,
      name:string,
      value: number,
      image: string,
      quantity: number,
      created_at: string,
      updated_at: string
  },
  Giver: {
      id:string,
      firstName: string,
      lastName: string,
      pseudo: string,
      email: string,
      roleId: string,
      city: string,
      dollarAvailables:number,
      age: number,
      created_at:string,
      updated_at: string
  },
  Receiver: {
      id: string,
      firstName:string,
      lastName: string,
      pseudo: string,
      email: string,
      roleId: string,
      city: string,
      dollarAvailables: string,
      age: number,
      created_at:string,
      updated_at: string
  }
}

export type createOfferType ={ 
  id_crypto:string
  amount :number 
}
// export enum Roles  { 
//  admin = 'admin ',
//  user ='user',
//  moderateur ='moderateur'

// }

// export enum Status {
//     active = 'active',
//     inactive ='inactive',
//     pending ='pending'
// }