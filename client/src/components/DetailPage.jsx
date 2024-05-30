import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailPage() {

   const [dog, setDog] = useState({})

   const { id } = useParams()

    useEffect(() => {
          axios(`http://localhost:3001/dogs/${id}`).then(
             ({ data }) => {
               if (data.name) {
                  setDog(data)
                } 
                else if (data[0].name) {
                  setDog(data[0])
                }
             }
          )
          return setDog({});
       }, [id])

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
      <h2> <span style={{ color: '#999' }}>Vida:</span> {dog.years}</h2>
      <h2> <span style={{ color: '#999' }}>Altura:</span> {dog.height} <span> cm</span> </h2>
      <h2> <span style={{ color: '#999' }}>Peso:</span> {dog.weight} <span> Kg</span> </h2>
      <h2> <span style={{ color: '#999' }}>Temperamentos:</span> <br/> {dog.temperaments} </h2>
    </div>
  )
}

export default DetailPage