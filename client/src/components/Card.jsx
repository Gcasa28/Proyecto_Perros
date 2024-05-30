import { NavLink } from "react-router-dom";
import { stylesCard } from "../utils"

export default function Card (props) {

    return (
        <div style={stylesCard.cardContainer}>

          <div style={stylesCard.card} id={props.id}>

            <div style={stylesCard.cardContent}>

                <NavLink to={`/detail/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>

                <h3>Raza: </h3>

                <h2 style={stylesCard.name}>{props.name}</h2>

                <img src={props.image} alt={props.name} style={stylesCard.image} />

                <h3>Temperamentos: </h3>

                <h3>{props.temperaments}</h3>

                <h3>Peso: </h3>

                <h2>{props.weight} kg</h2>

                </NavLink>

            </div>

          </div>

        </div>

      );
      
}