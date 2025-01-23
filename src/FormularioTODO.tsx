import { useState } from "react"

interface FormularioTODOProps {
    onAgregarTodo : (desc : string) => void
}

const FormularioTODO = (props : FormularioTODOProps) => {
    const [descripcionTODO, setDescripcionTODO] = useState<string>("")

    const descripcionTODOOnChange = (e : React.ChangeEvent<HTMLInputElement >) => {
        setDescripcionTODO(e.currentTarget.value)
    }

    return <section className="row">
        <div className="col-md-11">
            <input className="form-control" 
                    type="text" 
                    value={ descripcionTODO }
                    onChange={ descripcionTODOOnChange }/>
        </div>
        <div className="col-md-1">
            <button className="btn btn-primary" 
                type="button"
                onClick={ () => {
                    props.onAgregarTodo(descripcionTODO)
                } }>
                +
            </button>
        </div>   
    </section>
}

export default FormularioTODO