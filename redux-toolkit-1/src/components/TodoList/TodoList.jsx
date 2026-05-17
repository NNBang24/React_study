import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

function TodoList () {
    const todos = useSelector((state) => state.todos.todo) ;
    console.log(todos)
    return (
        <>
            <ul>
                {
                todos.map(todoData => (
                    <TodoItem key={todoData.id} todo={todoData}/>
                ))
                }   
            </ul>
        </>
    )
}

export default TodoList ;