import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";

function TodoInput () {
    const [todoText , setTodoTest] = useState('') ;
    const dispatch = useDispatch() ;
    const handleAddTodo = async() => {
        if(todoText.trim() === '')  {
            alert("Vui long nhap noi dung todo!") ;
            return ;
        }
        const newTodo = {
            id : Date.now(),
            text : todoText ,
            completed : false 
        }
        dispatch(addTodo(newTodo)) ;
        setTodoTest('') ;
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Nhap to do moi " 
                    value={todoText}
                    onChange={(e) => {
                        setTodoTest(e.target.value)
                    }}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </>
    )
}

export default TodoInput ;