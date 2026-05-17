import {createSlice} from '@reduxjs/toolkit' ;

const todoSlice = createSlice(
    {
        name : 'todos' ,
        initialState : {
            todo : [] ,
        } ,
        reducers : {
            addTodo : (state , action) => {
                const newTodo = action.payload ;
              
                state.todo.push(newTodo)
            } ,
            toggleTodo : (state , action) => {
                const todoFind = state.todo.find(todo => todo.id === action.payload) ;
                if(todoFind ) {
                    todoFind.completed = !todoFind.completed
                }

            },
            deleteTodo : (state , action) => {
                state.todo = state.todo.filter(todo => todo.id !== action.payload) ;


            }
        }
    }
);
export const {addTodo , toggleTodo , deleteTodo} = todoSlice.actions ;
export default todoSlice.reducer