import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./pages/inicio"
import CriarCategoria from "./pages/criarCategoria"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/criar/categoria" element={<CriarCategoria />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
