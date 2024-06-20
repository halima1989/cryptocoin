import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export const schema = yup
  .object({
    id_crypto: yup.string().required("ce champs est obligatoire"),
    amount: yup.number().positive("le nombre doit etre positive").integer("le nombre doit etre un entier").required("ce champs est obligatoire").typeError("ce nest pas un nombre"),

  
})