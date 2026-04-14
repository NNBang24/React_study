import React from "react";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";

function Home () {
    return (
        <>
        <h1>Todo App With redux toolkit</h1>
        <TodoInput/>
        <TodoList/>
        </>
    )
}
export default Home