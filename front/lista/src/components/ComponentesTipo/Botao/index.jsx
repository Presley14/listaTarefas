import styles from "./Botao.module.css"


function Botao({ texto, tipo, aoClicar }) {
    return(
        <div className={styles.btnCaixa}>
            <button className={styles.botao} type={tipo} onClick={aoClicar}>
                {texto}
            </button> 
        </div>
        
    )
}

export default Botao
