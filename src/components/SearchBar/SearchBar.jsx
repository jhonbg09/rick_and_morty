import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const {onSearch} = props
   const [id, setId] = useState('');
   const handleChange = (e) =>{
      return(
         setId(e.target.value)
      )
   }
   return (
      <div className={styles.searchbar}>
         <input 
         className={styles.input_searchbar}
         type='search' 
         placeholder="Search..."
         onChange={handleChange}
         value={id}
         />
         <button className={styles.btn_search} onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}
