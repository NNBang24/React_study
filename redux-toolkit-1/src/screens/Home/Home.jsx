import React from "react";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";


function Home () {

    return (
        <>
        <div>
            <h1>
                Todo App with redux-toolkit
                <TodoInput/>
                <TodoList/>
            </h1>
        </div>
        </>
    )
}

export default Home 