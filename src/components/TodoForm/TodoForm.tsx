import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTodo, showAlert } from '../../redux/actions/index';
import { IAlertReducer } from "../../types/types";
import { Alert } from "../Alert/Alert";

export const TodoForm = () => {
    const [title, setTitle] = useState('')
    const alertState = useSelector((state: IAlertReducer) => state.alertReducer)
    const dispatch = useDispatch()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!title.trim()) {
            dispatch(showAlert('Название дела не может быть пустым', 'warning'))
            return
        }


        dispatch(createTodo(title))
        setTitle('')
    }

    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {alertState.alertText.length > 0 && <Alert props={alertState} />}
            <div className="mb-3 d-flex align-items-end justify-content-between">
                <div className="form-group" style={{ width: '92%', marginRight: '10px' }}>
                    <label htmlFor="" className="form-label">Введите название дела</label>
                    <input 
                        onChange={handleChangeInputValue}
                        type="text" 
                        className="form-control"
                    />
                </div>
                <button className="btn btn-success">создать</button>
            </div>
        </form>
    )
}