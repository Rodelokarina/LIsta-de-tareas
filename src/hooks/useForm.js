import { useState } from "react"

export const useForm = (initialForm = {}) =>{

    const[FormState,setFormState] = useState(initialForm)

    const onInputchange =(e)=>{
        const name = e.target.name
        const value = e.target.value

        setFormState({
            ...FormState,  
            [name]:value
        })
    }
    const onResetForm = () =>{
        setFormState(initialForm)
    }
 return{
    ...FormState,
    onInputchange,
    onResetForm
 }
}