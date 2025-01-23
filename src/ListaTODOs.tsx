import { TODO } from "./TodoPage"

interface ListaTODOsProps {
    lista: TODO[],
    onEliminarTodo : (pos : number) => void
}

const ListaTODOs = (props : ListaTODOsProps) => {
    return <section className="mt-2">
        <ul id="todos" className="list-group">
            {
                props.lista.map((item : TODO, index : number) => {
                    return <li className="list-group-item"
                                onClick={ () => {
                                    props.onEliminarTodo(index)
                                } }>
                        { item.descripcion }
                    </li>
                })
            }
        </ul>
    </section>
}

export default ListaTODOs