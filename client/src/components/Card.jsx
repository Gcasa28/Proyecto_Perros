import { NavLink } from "react-router-dom";
import { stylesCard } from "../utils"
// import { NavLink } from "react-router-dom"

export default function Card (props) {

    return (
        <div style={stylesCard.cardContainer}>
          <div style={stylesCard.card} id={props.id}>
            <div style={stylesCard.cardContent}>
                <NavLink to={`/detail/${props.name}`} style={{ textDecoration: 'none', color: 'black' }}>
                <h3>Raza: </h3>
                <h2 style={stylesCard.name}>{props.name}</h2>
                <img src={props.image} alt={props.name} style={stylesCard.image} />
                <h3>Temperamentos: </h3>
                <h2 style={stylesCard.temperaments}>{props.temperament}</h2>
                <h3>Peso: </h3>
                <h2>{props.weight} kg</h2>
                </NavLink>
            </div>
          </div>
        </div>
      );
}