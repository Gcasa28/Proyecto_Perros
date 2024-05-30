import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { stylesCard, temperamentos } from '../utils'
import ScrollTopPage from './ScrollTopPage'
import { orderCards, filterCards, filterDogs } from '../redux/actions'
import { useState } from 'react'


function HomePage() {

    const allDogs = useSelector((state) => state.allDogs || [])

    const dispatch = useDispatch()

    const [ currentPage, setCurrentPage ] = useState(1);
    const dogsPerPage = 8;

    const indexOfLastDog = currentPage * dogsPerPage;

    const indexOfFirstDog = indexOfLastDog - dogsPerPage;

    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    
    const paginate = pageNumber => setCurrentPage(pageNumber)


    const handleOrder = (evento) => {
      dispatch(orderCards(evento.target.value))
    }

    const handleFilter = (evento) => {
      dispatch(filterCards(evento.target.value))
    }

    const handleFilterCreated = (evento) => {
      dispatch(filterDogs(evento.target.value))
    }
    console.log(allDogs);

  return (
    <div>

                <div>
                    {Array.from({ length: Math.ceil(allDogs.length / dogsPerPage) }, (_, i) => (
                        <button key={i + 1} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                </div>


      <div>
          <select onChange={handleFilter} name='filter'>
            <option value="All">Todos</option>
            {temperamentos.map((temperamento, index) => (
              <option key={index} value={temperamento}>{temperamento}</option>
            ))}
          </select>
      </div>

      <div>
      <select onChange={handleOrder} name='order'>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                    <option value="PesoDescendente">Peso Descendente</option>
                    <option value="PesoAscendente">Peso Ascendente</option>
                </select>
      </div>

      <div>
        <select onChange={handleFilterCreated} name="created">
          <option value="todos">Todos</option>
          <option value="api">Api</option>
          <option value="bdd">BDD</option>
        </select>
      </div>

      <div style={stylesCard.cardContainer}>

          {
              currentDogs.map((dog, index) => {
                  return <Card
                      id = {dog.id}
                      key = {index}
                      name = {dog.name}
                      temperaments = {dog.temperaments}
                      image = {dog?.image}
                      weight = {dog.weight}
                      />
              })
          }

        <ScrollTopPage />
      </div>

    </div>
    
  )
}

export default HomePage
