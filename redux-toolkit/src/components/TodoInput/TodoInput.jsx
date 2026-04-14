import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../../redux/slices/todoSlice";

function TodoInput() {
    const dispatch = useDispatch() ;
    const [todoTest , setTodoTest] = useState('') 
    const handleAddTodo = async() =>{
        if(todoTest.trim() === '' ){
            alert('vui long nhap noi dung todo') ;
            return ;
        }

        
        dispatch(addTodo(todoTest));
        setTodoTest('')
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Nhap todo moi" value={todoTest} onChange={(e) =>{
                    setTodoTest(e.target.value)
                }}/>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </>
    )
}

export default TodoInput