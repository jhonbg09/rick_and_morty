import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
//Components
import Form from "./components/Form/Form";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
//Axios
import axios from "axios";
//Routes
import {Routes, Route, useLocation} from "react-router-dom"
import { useNavigate } from "react-router-dom";


function App() {
  const {pathname} = useLocation()

  const [characters, setCharacters] = useState([]);
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = '';
  const PASSWORD = '';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  } 

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
   setCharacters(characters.filter((char) => {
         return char.id !== Number(id)
      }))
   }

  return (
    <div className="App">
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
