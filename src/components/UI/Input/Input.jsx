import React from 'react'

export const Input = ({id, evento}) => {
  return (
    <div>
        <input type="text" id={id} placeholder="Ingrese el nombre" onKeyDown={evento}/>
    </div>
  )
}
