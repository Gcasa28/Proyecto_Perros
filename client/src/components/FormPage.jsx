import React, { useState } from 'react'
import  { stylesCard, temperamentos } from "../utils"
import validation from '../validation'
import { useDispatch } from "react-redux"
import { createDog } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function FormPage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

    const [input, setInput] = useState({
        name:'',
        image:'',
        height:'',
        weight:'',
        years:'',
        temperamentId1: "",
        temperamentId2: ""
    })

    const [errors, setErrors] = useState({
      name:'',
      image:'',
      height:'',
      weight:'',
      years:'',
      temperamentId1:'',
      temperamentId2: ''
  })

  const handleChange = (evento) => {
    const { name, value } = evento.target;

      setInput({
        ...input,
        [name]: value
      });
       
       setErrors(validation(
         {...input,
          [name] : value}
       ))
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        dispatch(createDog(input))
        navigate("/home")
       }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <img src="https://img.freepik.com/fotos-premium/grupo-perros-cada-mirando-su-propia-direccion-creando-composicion-llamativa-unica_124507-220078.jpg" alt="Bienvenido" style={stylesCard.dogImage}/> <br/>

            <label>Nombre: </label>
            <input 
            name="name" 
            type="text" 
            value={input.name} 
            onChange={handleChange} 
            />
            <p style={{color:'coral'}}>{errors.name?errors.name:null}</p>
            <br/>

            <label>Imagen: </label>
            <input 
            name="image" 
            type="text" 
            value={input.image} 
            onChange={handleChange} 
            />
            <p style={{color:'coral'}}>{errors.image?errors.image:null}</p>
            <br/>

            <label>Altura: </label> 
            <input 
            name='height' 
            type="text" 
            onChange={handleChange} 
            value={input.height}
            /> <span>(cm)</span>
            <p style={{color:'coral'}}>{errors.height?errors.height:null}</p>

            <br/>
            <label>Peso: </label> 
            <input 
            name='weight' 
            type="text" 
            onChange={handleChange} 
            value={input.weight}
            /> <span>(kg)</span>
            <p style={{color:'coral'}}>{errors.weight?errors.weight:null}</p>

            <br/>
            <label>Años: </label>
            <input 
            name='years' 
            type="text" 
            onChange={handleChange} 
            value={input.years}
            /> <span>(años)</span>
            <p style={{color:'coral'}}>{errors.years?errors.years:null}</p>
            <br/>

            <label>Temperamentos:</label>
            <div>
                <select name='temperamentId1' value={input.temperamentId1} onChange={handleChange}>
                <option value="">Seleccione un temperamento</option>
                      {temperamentos.map((temperamento, index) => (
                        <option key={index} value={index + 1}>{temperamento}</option>
                      ))}
                </select>
            </div>

            <div>
                <select name='temperamentId2' value={input.temperamentId2} onChange={handleChange}>
                <option value="">Seleccione un temperamento</option>
                      {temperamentos.map((temperamento, index) => (
                        <option key={index} value={index + 1}>{temperamento}</option>
                      ))}
                </select>
            </div>

            <button type="submit" disabled={errors.name || errors.image || errors.height || errors.weight || errors.years}>Crear Dog</button>


        </form>
    </div>
  )
}

export default FormPage

