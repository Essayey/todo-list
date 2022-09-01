import React, { useEffect } from 'react'
import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DELETE_TODO, SET_DONE } from '../store';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const addTodo = (text) => {
        dispatch({type: ADD_TODO, payload: {text: text, isDone: false}});
    }
    const removeTodo = (number) => {
        dispatch({type: DELETE_TODO, payload: number});
    }
    const checkTodo = (number) => {
        dispatch({type: SET_DONE, payload: number});
    }

    const countTotalDone = () => {
        return todos.reduce((totalDone, todo) => {
            if (todo.isDone) return totalDone + 1;
            return totalDone;
        }, 0)
    }
    const [totalDone, setTotalDone] = useState(countTotalDone());

    const incrementTotalDone = () => {
        setTotalDone(prev => prev + 1);
    }
    const decrementTotalDone = () => {
        setTotalDone(prev => prev - 1);
    }
    
    console.log(totalDone);

    // Разобраться с классами
    return (
        <div className='TodoList'>
            <h1 style={{ fontFamily: 'sans-serif' }}>Todo list!</h1>
            Выполнено: {totalDone}/{todos.length}

            {todos.map((todo, index) =>
                <TodoItem number={index + 1}
                    key={Date.now() + index}

                    text={todo.text}
                    isDone={todo.isDone}
                    remove={removeTodo}
                    checkTodo={checkTodo}
                    incrementTotalDone={incrementTotalDone}
                    decrementTotalDone={decrementTotalDone}/>)
            }
            <TodoForm addTodo={addTodo}/>

        </div>
    )
}

export default TodoList