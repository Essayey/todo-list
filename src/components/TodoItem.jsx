import React from 'react'

const TodoItem = ({ number, text, isDone, remove, checkTodo, decrementTotalDone, incrementTotalDone }) => {

    const onCheck = () => {
        checkTodo(number);
        if (isDone) decrementTotalDone();
        else incrementTotalDone();
    }
    const onDelete = () => {
        remove(number);
        if (isDone) decrementTotalDone();
    }

    return (
        <div className='TodoItem' style={{ position: 'relative' }}>
            {number}. {text}.
            <input type="checkbox" defaultChecked={isDone ? true : false} onChange={onCheck} />
             
            <svg style={{ position: 'absolute', top: 10, right: 12, height: 12, width: 12, cursor: 'pointer' }}
                onClick={onDelete} 
                xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="11"
                    x2="11" y2="1"
                    stroke="black"
                    strokeWidth="2" />
                <line x1="1" y1="1"
                    x2="11" y2="11"
                    stroke="black"
                    strokeWidth="2" />
            </svg>
        </div>
    )
}

export default TodoItem