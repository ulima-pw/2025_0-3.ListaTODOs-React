import { useState } from "react";
import Encabezado from "./Encabezado"
import Footer from "./Footer"
import FormularioTODO from "./FormularioTODO"
import ListaTODOs from "./ListaTODOs"

export interface TODO {
    descripcion : string;
    fecha : Date
}

const TodoPage = () => {
    const [listadoPorHacer, setListadoPorHacer] = useState<TODO[]>([])

    const nombreAplicacion = "TODO App"

    const agregarTODOHandler = (descripcion : string) => {
        const nuevoTODO = {
            descripcion : descripcion,
            fecha : new Date()
        }

        //listadoPorHacer.push(nuevoTODO)
        setListadoPorHacer([...listadoPorHacer, nuevoTODO])
    }

    return <div className="container">
        <Encabezado titulo={ nombreAplicacion }/>
        <FormularioTODO onAgregarTodo={ agregarTODOHandler }/>
        <ListaTODOs lista={listadoPorHacer}/>
        <Footer />
    </div>
}

export default TodoPage