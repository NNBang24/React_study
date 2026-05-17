import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../../redux/slices/todoSlice"

function TodoItem ({todo}) {
    const dispatch = useDispatch()
    const handleToggleTodo = () => {
        dispatch(toggleTodo(todo.id))
    }
    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }
    return (
        <>
            <li >
                <input type="checkbox" name="" id="" 
                    checked={todo.completed} 
                    onChange={handleToggleTodo}
                />
                <span style={{textDecoration : todo.completed ? "line-through" : "none"}}>
                    {todo.text}
                </span>
                <button onClick={handleDelete}>Delete</button>
                
            </li>
        </>
    )
}

export default TodoItem