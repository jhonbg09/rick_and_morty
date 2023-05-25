import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={styles.card}>
      <div>
        <button
          className={styles.btn_x} onClick={() => {onClose(id);}}>X</button>
      </div>
      <Link to={`/detail/${id}`}>
      <div>
        <div className={styles.container_img}>
          <img className={styles.img_card} src={image} alt="imagen" />
        </div>
        <div>
          <h2>{name} </h2>
          {/* <h2>status: {status}</h2>
          <h2>species: {species}</h2> 
          <h2>gender: {gender}</h2> 
          <h2>origin: {origin}</h2> */}
        </div>
      </div>

      </Link>
   </div>
  );
}
