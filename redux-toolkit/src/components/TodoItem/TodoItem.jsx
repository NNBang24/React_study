import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../../redux/slices/todoSlice";


function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const handleToggleTodo = () => {
        dispatch(toggleTodo(todo.id))
    }
    const handleDeleteTodo = () =>{
        dispatch(deleteTodo(todo.id))
    }
    return (
        <>
            <li >
                <input type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggleTodo}
                />
                <span
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.title}
                </span>
                <button onClick={handleDeleteTodo}>Delete</button>
            </li>
        </>
    )
}

export default TodoItem