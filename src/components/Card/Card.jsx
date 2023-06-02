import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { connect } from "react-redux";
import { useState } from "react";
import { addFav, removeFav } from "../../redux/action";

function Card(props) {
  const { id, name, image, onClose, addFav,removeFav } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () =>{
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav)
  }
  return (
    <div className={styles.card}>
       
      <div className={styles.botton}>
      {isFav ? (
        <button className={styles
        .buttonFav} onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

        <button className={styles.btn_x} onClick={() => {onClose(id);}}>X</button>
      </div>
      <Link to={`/detail/${id}`}>
      <div>
        <div className={styles.container_img}>
          <img className={styles.img_card} src={image} alt="imagen" />
        </div>
        <div>
          <h2>{name} </h2>
        </div>
      </div>

      </Link>
   </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(Card);