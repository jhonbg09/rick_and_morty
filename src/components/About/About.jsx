import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container_about}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 >Acerca de Rick and Morty</h1>
        </div>
        <div className={styles.text}>
          <p>
            Rick and Morty es una popular serie de televisión animada creada por
            Justin Roiland y Dan Harmon. La serie sigue las aventuras
            interdimensionales de Rick, un científico brillante pero excéntrico,
            y su nieto Morty. Juntos, viajan a través del espacio y el tiempo,
            encontrando mundos extraños y enfrentándose a situaciones hilarantes
            y a menudo peligrosas.

            La serie combina elementos de ciencia ficción, comedia negra y
            sátira, y ha ganado una gran base de seguidores en todo el mundo.
          </p>
        </div>
      </div>
    </div>
  );
}
