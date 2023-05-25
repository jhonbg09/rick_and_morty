import React from 'react'
import styles from './Detail.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Detail() {
  const {id} = useParams()
  const [character,setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);



  return (
    <div className={styles.container}>
    <img src={character.image} alt="char detail" />
    <h1>{character?.name}</h1>
    <h2>{character?.status}</h2>
    <h2>{character?.species}</h2>
    <h2>{character?.gender}</h2>
    <h2>{character.origin?.name}</h2>
  </div>
  )
}

export default Detail;
