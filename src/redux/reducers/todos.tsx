import { ADD_TODO, DELETE_TODO, COUNTER_CHANGE } from "../actionTypes";

const initialState = {
    todo_list: [],
    count: 'Home',
    username: '',
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, task } = action.payload
            return {
                ...state,
                todo_list: [...state.todo_list, { id, task }]
            };
        }
        case DELETE_TODO: {
            const { id } = action.payload
            return {
                ...state,
                todo_list: state.todo_list.filter((todo: any) => todo.id != id)
            };
        }
        case COUNTER_CHANGE: {
            return {
                count: action.payload.count
            };
        }
        case "LOGIN":
            return {
                username: action.payload.username,
            };
        default:
            return state;
    }
}
