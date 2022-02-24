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
            <div id="inputDiv">
                    <Input id="input1" evento={validacion}/>
                </div>
                <hr id="hrinput"></hr>
            <div id="main-container">
                {character.map((index, key) => {
                    return(
                        <div id="characters">
                            <div>
                                <img src={index.image} id="char-img" alt=""/>
                            </div>
                            <div>
                                <h3>Nombre: </h3>
                                <h2>{index.name}</h2>
                                <h3>Estado: {index.status}</h3>  
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
        

  )
}
