import styles from "./Botao.module.css"


function Botao({ texto, tipo, aoClicar }) {
    return(
        <button className={styles.botao} type={tipo} onClick={aoClicar}>
            {texto}
        </button>
    )
}

export default Botao
