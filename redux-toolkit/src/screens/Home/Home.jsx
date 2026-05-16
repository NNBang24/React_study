import React from "react";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";
import LogoutButton from "../../components/Logout/LogoutButton";

function Home () {
    return (
        <>
        <div>
            <h1>Todo App With redux toolkit</h1>
            <LogoutButton/>
        </div>
      
        <TodoInput/>
        <TodoList/>
        </>
    )
}
export default Home