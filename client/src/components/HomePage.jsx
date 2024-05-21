import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { stylesCard } from '../utils'

function HomePage() {
    const allDogs = useSelector((state) => state.allDogs)
  return (

    <div style={stylesCard.cardContainer}>

        {
            allDogs.map((dog, index) => {
                return <Card
                    id = {dog.id}
                    key = {index}
                    name = {dog.name}
                    temperament = {dog.temperament}
                    image = {dog?.image}
                    weight = {dog.weight}
                    />
            })
        }

    </div>
  )
}

export default HomePage