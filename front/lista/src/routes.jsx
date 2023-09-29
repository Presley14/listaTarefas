import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./pages/inicio"
import CriarCategoria from "./pages/criarCategoria"
import ListaCategoria from "./pages/listaCategoria"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/criar/categoria" element={<CriarCategoria />}></Route>
                <Route path="/lista/categoria" element={<ListaCategoria />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
