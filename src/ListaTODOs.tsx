import { TODO } from "./TodoPage"

interface ListaTODOsProps {
    lista: TODO[]
}

const ListaTODOs = (props : ListaTODOsProps) => {
    return <section className="mt-2">
        <ul id="todos" className="list-group">
            {
                props.lista.map((item : TODO) => {
                    return <li className="list-group-item">{ item.descripcion }</li>
                })
            }
        </ul>
    </section>
}

export default ListaTODOs