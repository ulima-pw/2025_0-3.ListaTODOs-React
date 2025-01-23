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

    const eliminarTODOHandler = (pos : number) => {
        listadoPorHacer.splice(pos, 1)
        setListadoPorHacer([...listadoPorHacer])
    }

    return <div className="container">
        <Encabezado titulo={ nombreAplicacion }/>
        <FormularioTODO onAgregarTodo={ agregarTODOHandler }/>
        <ListaTODOs lista={listadoPorHacer}
                    onEliminarTodo={ eliminarTODOHandler }/>
        <Footer />
    </div>
}

export default TodoPage