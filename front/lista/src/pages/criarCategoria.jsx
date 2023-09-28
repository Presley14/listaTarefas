import Main from "../components/ComponentesLayout/Main"
import Sidebar from "../components/ComponentesLayout/Sidebar"
import styles from "../styles/CriarCategoria.module.css"
import Footer from "../components/ComponentesLayout/Footer"

function CriarCategoria() {
    return(
        <div>
            <div className={styles.categoria}>
                <Sidebar />
                <Main>

                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    )
}

export default CriarCategoria
