


function Botao({ texto, tipo, aoClicar }) {
    return(
        <button type={tipo} onClick={aoClicar}>
            {texto}
        </button>
    )
}

export default Botao
