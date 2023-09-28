import Main from "../components/ComponentesLayout/Main"
import Sidebar from "../components/ComponentesLayout/Sidebar"
import styles from "../styles/Inicio.module.css"
import Footer from "../components/ComponentesLayout/Footer"


function Inicio() {
    return(
        <div>
            <div className={styles.inicio}>
                <Sidebar />
                <Main >
                    <div className={styles.main}>
                    <h2>Seja bem-vindo.</h2>
                        <p>Crie suas tarefas.</p> 
                    </div>
                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    )
}

export default Inicio
