import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./pages/inicio"
import CriarCategoria from "./pages/criarCategoria"
import CriarTarefa from "./pages/criarTarefa"
import Tarefas from "./pages/tarefas"
import Categorias from "./pages/categorias"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/criar/categoria" element={<CriarCategoria />}></Route>
                <Route path="/lista/categoria" element={<Categorias />}></Route>
                <Route path="/criar/tarefa" element={<CriarTarefa />}></Route>
                <Route path="/lista/tarefa" element={<Tarefas />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
