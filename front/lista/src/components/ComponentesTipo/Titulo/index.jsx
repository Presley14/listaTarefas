import styles from "./Titulo.module.css"


function Titulo({ titulo }) {
    return(
        <div className={styles.caixaTitulo}>
           <h2 className={styles.titulo}>{titulo}</h2> 
        </div>
        
    )
}

export default Titulo
