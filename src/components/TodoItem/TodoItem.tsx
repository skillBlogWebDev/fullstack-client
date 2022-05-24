import { useState, ChangeEvent } from 'react';
import { ITodo } from '../../types/types';
import './styles.css'

interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void;
    doneTodo: (arg0: string, arg1: boolean) => void;
    changeTodo: (arg0: string, arg1: boolean, arg2: string) => void;
}

export const TodoItem = ({ todo, deleteTodo, doneTodo, changeTodo }: ITodoProps) => {
    const [isTodoEdit, setIsTodoEdit] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changeTodo(newTitle, todo.done, todo.id)
            setIsTodoEdit(!isTodoEdit)
        } 
    }

    const handleTodoEdit = () => setIsTodoEdit(!isTodoEdit)
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done)
    
    return (
        <li className={
            `todo-item list-group-item d-flex justify-content-between align-items-center
            ${todo.done ? 'list-group-item-success' : ''}`
        }>
            <div 
                className='todo-text'
                onKeyPress={handleSubmit}
            >
                {isTodoEdit 
                ? <input type='text' onChange={handleTitleChange} />
                : <span className={`${todo.done ? 'title-done' : ''}`}>{todo.title}</span>}
            </div>
            <div className="todo-btns">
                <button
                    onClick={handleTodoEdit}
                    className="todo-btn btn btn-primary"
                >
                    Изменить
                </button>
                <button
                    onClick={handleComplete}
                    className="todo-btn btn btn-success"
                >
                    Завершить
                </button>
                <button
                    onClick={handleDelete}
                    className="todo-btn btn btn-danger"
                >
                    Удалить
                </button>
            </div>
        </li>
    )
}