//Herramientas url que van a usar nuestros componentes para agregar navegabilidad a la app
import { Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Administracion from "../pages/Administracion";
import Componentes from "../pages/Componentes";
const AppRoutes: React.FC = () => {
return (
//que componente se meustra cuando conincide la ruta
<Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/componentes" element={<Componentes/>}/>
        <Route path="/administracion" element={<Administracion/>}/>
</Routes>
)
}

export default AppRoutes;
