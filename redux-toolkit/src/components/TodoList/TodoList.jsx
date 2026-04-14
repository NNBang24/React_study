import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { fetchTodo } from "../../redux/slices/todoSlice";


function TodoList() {
    // const todos = useSelector((state) => {
    //     return state.todos.todo
    // });
    // const [loading , setLoading] = useState(true) ;
    // const [error , setError] = useState(null) ;
    // const [todos , setTodos] = useState([])
    const dispatch = useDispatch() ;
    const todos  = useSelector((state)=> {
        return state.todos.todo
    })
    const loading = useSelector((state) => {
        return state.todos.loading
    })
    const error = useSelector((state) => {
        return state.todos.error
    })
    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])
    if(loading === true) {
        return <p>Loading todo ...</p>
    }
    if(error) {
        return <p>Error : {error}</p>
    }
    return (
        <>
        <ul>
            {todos.map(todoData => (
               <TodoItem key={todoData.id} todo={todoData}/>
            ))}
        </ul>
        </>
    )
}
export default TodoList