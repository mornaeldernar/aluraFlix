import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Inicio from "./pages/Inicio";
import NuevoVideo from "./pages/NuevoVideo";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Inicio/>}></Route>
                <Route path="nuevo" element={<NuevoVideo/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;