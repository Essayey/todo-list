import {combineReducers, configureStore, createStore} from 'redux';

const defaultState = {
    todos: [{ text: 'Make todo list', isDone: true },
    { text: 'Make social media project', isDone: false },
    { text: 'Chill', isDone: true }]
};

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_DONE = 'SET_DONE';

const todoReducer = (state = defaultState, action) => {
    let newState;
    switch(action.type){
        case ADD_TODO:
            return {todos: [...state.todos, action.payload]}
        case DELETE_TODO:
            newState = {todos: state.todos.filter((todo, index) => index + 1 !== action.payload)};
            console.log(`Удалено TODO под номером ${action.payload} с текстом "${state.todos[action.payload - 1].text}"`)
            return newState;
        case SET_DONE:
            newState = state;
            newState.todos[action.payload - 1].isDone = !state.todos[action.payload - 1].isDone;
            console.log(`${newState.todos[action.payload - 1].isDone ? "Чекнуто" : "Анчекнуто"} TODO под номером ${action.payload} с текстом "${state.todos[action.payload - 1].text}"`)
            return newState;
        default:
            return state

    }
}


const rootReducer = combineReducers({
    todo: todoReducer,
})

export const store = createStore(todoReducer)