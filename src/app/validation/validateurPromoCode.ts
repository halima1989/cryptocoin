import * as yup from "yup"

export const schema = yup
  .object({
    name: yup.string().required("ce champs est obligatoire"),
    value: yup.number().positive("le nombre doit etre positive").integer("le nombre doit etre un entier").required("ce champs est obligatoire").typeError("ce nest pas un nombre"),
   
})