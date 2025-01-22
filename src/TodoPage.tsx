import Encabezado from "./Encabezado"
import Footer from "./Footer"
import FormularioTODO from "./FormularioTODO"
import ListaTODOs from "./ListaTODOs"

export interface TODO {
    descripcion : string;
    fecha : Date
}

const TodoPage = () => {
    const nombreAplicacion = "TODO App"
    const listadoPorHacer : TODO[] = [
        {
            descripcion : "Domir",
            fecha : new Date() // fecha actual
        },
        {
            descripcion : "Bañar al perro",
            fecha : new Date() // fecha actual
        }
    ]
    return <div>
        <Encabezado titulo={ nombreAplicacion }/>
        <FormularioTODO />
        <ListaTODOs lista={listadoPorHacer}/>
        <Footer />
    </div>
}

export default TodoPage