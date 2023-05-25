import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css"

export default function Cards(props) {
  const { characters, onClose} = props;
  return (
    <div className={styles.cards}>
      
      <div className={styles.container_cards}>
      {characters.map((char) => {
        return(
         <Card 
            key = {char.id}
            id = {char.id}
            name = {char.name}
            status = {char.status}
            species = {char.species}
            gender = {char.gender}
           
            image = {char.image}
            onClose={onClose}
         />
        )
      })}
      </div>
    </div>
  );
}
