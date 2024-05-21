import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

function DetailPage({goHome}) {

   const allDogs = useSelector((state) => state.allDogs)

   const [dog, setDog] = useState({})

   const { name } = useParams()

    useEffect(() => {
          axios(`http://localhost:3001/dogs?name=${name}`).then(
             ({ data }) => {
               if (data && data.length > 0) {
                  const dogFromAPI = data[0]
                  const dogFromState = allDogs.find((d) => d.name === name)
                  
                  if (dogFromState) {
                    dogFromAPI.image = dogFromState.image
                  }
                  
                  setDog(dogFromAPI)
                } else {
                  window.alert('No hay personajes con ese nombre')
                }
             }
          )
          return setDog({});
       }, [name])

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.image} alt={dog.name} style={{
               display: 'block',
               width: '100px',
               height: '100px',
               objectFit: 'cover',
               position: 'relative',
               margin: '20px auto'
           }}/>
      <h2> <span style={{ color: '#999' }}>Vida:</span> {dog.years} </h2>
      <h2> <span style={{ color: '#999' }}>Altura:</span> {dog.height} </h2>
      <h2> <span style={{ color: '#999' }}>Peso:</span> {dog.weight} </h2>
      <h2> <span style={{ color: '#999' }}>Temperamentos:</span> {dog.temperament} </h2>

      <button onClick={goHome}>Pagina Principal</button>
    </div>
  )
}

export default DetailPage