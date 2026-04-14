import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from '../../api/axiosClient'

export const fetchTodo = createAsyncThunk(
    'todos/fetchTodos', // action type 
    async () => {
        const response = await axiosClient.get('/todo');
        return response.data
    }
);
export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (todoText) => {
        const response = await axiosClient.post('/todo', {
            title: todoText
        });
        return response.data; /// newTodo ben backend
    }
)
export const toggleTodo = createAsyncThunk(
    'todos/toggleTodo',
    async (todoId, { getState }) => {
        const todo = getState().todos.todo.find(t => {
            return t.id === todoId
        })
        if (!todo) {
            return;
        }
        const updateTodo = { completed: !todo.completed };
        await axiosClient.patch(`/todo/${todoId}`,
            updateTodo
        )
        return todoId;
        // cach 2 
        // const response = await axiosClient.patch(`/todo/${todoId}`,
        //     updateTodo
        // ) ;
        // return response.data

    }
)
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (todoId) => {
        await axiosClient.delete(`/todo/${todoId}`);
        return todoId
    }
)
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todo: [],
        loading: true,
        error: null
    },
    reducers: {
        // addTodo : (state , action) => {
        //     const newTodo = action.payload ;

        //     state.todo.push(newTodo)
        // } ,
        // toggleTodo :(state ,action) =>{
        //     const todoFind = state.todo.find(todo =>{
        //         return todo.id === action.payload
        //     });
        //     if(todoFind) {
        //         todoFind.complete = !todoFind.complete
        //     }

        // } ,
        // deleteTodo : (state , action) => {
        //     state.todo = state.todo.filter(todo => {
        //         return todo.id !== action.payload
        //     })
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.todo = action.payload;
                state.loading = false;
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })

            /// addTodo
            .addCase(addTodo.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todo.push(action.payload)
                state.loading = false;
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })

            /// toggleTodo
            .addCase(toggleTodo.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const toggleTodoId = action.payload;
                const todo = state.todo.find(t => {
                    return t.id === toggleTodoId
                })
                if (todo) {
                    todo.completed = !todo.completed
                }

                //cach 2 

                // if(action.payload) { // cach nay toi uu khi update nhieu truowng hon
                //     const toggleTodo = action.payload;
                //     const todoIndex = state.todo.findIndex(t => {
                //         return t.id === toggleTodo.id
                //     })
                //     if(todoIndex > -1){
                //         state.todo[todoIndex] = action.payload
                //     }
                // }

                state.loading = false;
            })
            .addCase(toggleTodo.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })

            /// deleteTodo
            .addCase(deleteTodo.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const deleteTodoId = action.payload;
                state.todo = state.todo.filter(t => {
                    return t.id !== deleteTodoId
                })

                state.loading = false;
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })


    }
})
export const { } = todoSlice.actions;
export default todoSlice.reducer