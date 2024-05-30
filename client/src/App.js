import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'
import DetailPage from './components/DetailPage';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { getDogs } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import FormPage from './components/FormPage';


function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const allDogs = useSelector(state => state.allDogs)

  const goHome = () => {
    navigate("/home")
  }

  useEffect(() => {
    try {
      dispatch(getDogs())
    } catch (error) {
      console.error("Hubo un error al obtener los dogs:", error)
    }
  }, [])

  async function onSearch(name) {
    if( name === "" || Number.isInteger(parseInt(name))){
       return alert("Ingrese un nombre")
    }
  
    try {
      const dogName = allDogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
  
      if (dogName) {
        navigate(`/detail/${dogName.id}`)
      } else {
        alert("¡No hay perros con este nombre!");
      }
  
      } catch (error) {
  
        console.error("Hubo un error al obtener el Dog:", error)
    }
  }

  return (
    <div className="App">

    {
      location.pathname !== "/" ? <NavBar onSearch={onSearch} goHome={goHome} /> : null
    }
      
    <Routes>

      <Route path="/" element={<LandingPage goHome={goHome} />} />

      <Route path="/home" element={<HomePage/>} />

      <Route path="/detail/:id" element={<DetailPage />} />

      <Route path='/form' element={<FormPage />} />

    </Routes>

    </div>
  );
}

export default App;
