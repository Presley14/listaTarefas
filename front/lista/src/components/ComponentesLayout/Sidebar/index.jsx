import { Link } from "react-router-dom"
import styles from "./Sidebar.module.css"

function Sidebar() {
    return(
        <div className={styles.sidebar}>
            <Link to="/"><p className={styles.link}>Inicio</p></Link>
            <div className={styles.hr}>
               <br /><hr /><br /> 
            </div>
            <ul>
                
                <Link to="/lista/tarefa"><li className={styles.link}>Tarefas</li></Link>
                <Link to="/lista/categoria"><li className={styles.link}>Categorias</li></Link>
            </ul>
            <div className={styles.hr}>
               <br /><hr /><br /> 
            </div>
            <ul>
                <Link to="/criar/categoria"><li className={styles.link}>Criar Categoria</li></Link>
                <Link to="/criar/tarefa"><li className={styles.link}>Criar Tarefa</li> </Link>
            </ul>
        </div>
    )
}

export default Sidebar
