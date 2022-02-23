import React, {useState} from 'react'
import { Input } from '../../UI/Input/Input'

export const RickMortyMain = () => {

    const [character, setCharacter] = useState([])

    console.log(character)
    
    const funFetch = () =>{

        const input = document.getElementById('input1')

        fetch('https://rickandmortyapi.com/api/character/?name='+input.value)
        .then(response => response.json())
        .then(res =>{
            
            setCharacter(res.results)
        })
    }


    const validacion = (e) =>{
        if(e.keyCode === 13){
            funFetch()
        }
    }

    return (
        <div>
            <div>
                <Input id="input1" evento={validacion}/>
            </div>
            {character.map((index, key) => (
                <div>
                    <h2>{character.name}</h2>
                </div>
            ))
            }
        </div>

  )
}
