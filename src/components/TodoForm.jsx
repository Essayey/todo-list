import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    return (
        <div className='addTodo'>
            <input placeholder='Введите текст'
                className='addTodoInput' type="text"
                value={value}
                onChange={e =>  setValue(e.target.value) }
            />
            <button className='addTodoButton' onClick={() => {addTodo(value); setValue('')}}>Добавить todo</button>
        </div>
    )
}

export default TodoForm