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
                <li className={styles.link}>Tarefas</li>
                <li className={styles.link}>Categorias</li>
            </ul>
            <div className={styles.hr}>
               <br /><hr /><br /> 
            </div>
            <ul>
                <Link to="/criar/categoria"><li className={styles.link}>Criar Categoria</li></Link>
                <li className={styles.link}>Criar Tarefa</li> 
            </ul>
        </div>
    )
}

export default Sidebar
