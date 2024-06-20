
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export const schema = yup
  .object({
    name: yup.string().required("ce champs est obligatoire"),
    value: yup.number().positive("le nombre doit etre positive").integer("le nombre doit etre un entier").required("ce champs est obligatoire").typeError("ce nest pas un nombre"),
    quantity: yup.number().positive("le nombre doit etre positive").integer("le nombre doit etre un entier").required("ce champs est obligatoire").typeError("ce nest pas un nombre"),
    image: yup.string().required("ce champs est obligatoire"),
  
})