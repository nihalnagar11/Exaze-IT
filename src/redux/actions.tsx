import { ADD_TODO, DELETE_TODO, COUNTER_CHANGE } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (task: any) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        task
    }
});

export const deleteTodo = (id: any) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

export const changeCount = (count: any) => ({
    type: COUNTER_CHANGE,
    payload:  count 
})


const setUser = (user: any) => {
    return {
        type: "LOGIN",
        payload: {
            username: user.name,
        }
    }
}



