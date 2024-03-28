import React, { useRef } from "react"; // Agrega useRef a los imports

import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import { useState } from "react";

export const TodoUpdate = ({todo,handleUpdateTodo}) =>{ 
  const {UpdateDescription,onInputchange} = useForm({
    UpdateDescription:todo.description
  })

  const [disabled, setDisabled]= useState(true)
  const focusInputRef = useRef()

  const onSubmitUpdate = e =>{
    e.preventDefault();
    
    const id = todo.id;
    const description = UpdateDescription

    handleUpdateTodo(id, description)

    setDisabled(!disabled)
    focusInputRef.current.focus()
  }
    return(
        <form onSubmit={onSubmitUpdate}>
        <input
          type="text"
          className={"input-update " + (todo.done ? 'text-decoration-dashed' : '')}

          name="UpdateDescription"
          value={UpdateDescription}
          onChange={onInputchange}
          placeholder="¿Que hay que hacer?"
          readOnly={disabled}
          ref={focusInputRef}
        />
  
        <button className="btn-edit" type="submit"><FaEdit/>
      
        </button>
      </form>
    )

}
