import React, {useState} from 'react'
import { Input } from '../../UI/Input/Input'

export const RickMortyMain = () => {

    const [character, setCharacter] = useState([])

    console.log(character)
    
    const funFetch = () =>{

        const input = document.getElementById('input1')
        const url = 'https://rickandmortyapi.com/api/character/?name='+input.value

        fetch(url)
        .then(response => response.json())
        .then(res =>setCharacter(res.results))
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
            {character.map((index, key) => {
                return(
                    <div id='container-char'>
                        <h3>Nombre:</h3>
                        <h2>{index.name}</h2>
                        <h3>Estado:</h3>
                        <h3>{index.state}</h3>
                    </div>
                )
            })
        }
        </div>

  )
}
