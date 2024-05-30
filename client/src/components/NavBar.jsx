import React from 'react'
import SearchBarByName from './SearchBarByName'
import { NavLink } from 'react-router-dom'

function NavBar({onSearch, goHome}) {
  return (
    <div>
        <SearchBarByName onSearch={onSearch}/>
        <NavLink to={"/form"}>
            <button>
                Crear Dog
            </button>
        </NavLink>
        <button onClick={goHome}>Pagina Principal</button>
    </div>
  )
}

export default NavBar