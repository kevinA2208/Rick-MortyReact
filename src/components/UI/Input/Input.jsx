import React from 'react'

export const Input = ({id, evento}) => {
  return (
    <div>
        <input type="text" id={id} placeholder="Ingrese el nombre del personaje" onKeyDown={evento}/>
    </div>
  )
}
