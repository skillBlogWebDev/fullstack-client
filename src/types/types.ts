
export enum ITodoActionTypes {
    CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
    CREATE_TODO = 'CREATE_TODO',
    GET_TODOS = 'GET_TODOS',
    GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
    EDIT_TODO = 'EDIT_TODO',
    EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS',
    COMPLETE_TODO = 'COMPLETE_TODO',
    COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS',
    DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
    DELETE_TODO = 'DELETE_TODO',
    SHOW_ALERT = 'SHOW_ALERT',
    HIDE_ALERT = 'HIDE_ALERT',
}

export interface ITodo {
    id: string;
    title: string;
    done: boolean;
}

export interface ITodoState {
    todos: ITodo[]
}

export interface IAlertState {
    alertText: string
    alertStatus: string
}

export interface ITodoReducer {
    todoReducer: ITodoState
}

export interface IAlertReducer {
    alertReducer: IAlertState
}

export interface IEditTodo {
    title: string,
    id: string,
    done: boolean
}

export interface ICreateAction {
    type: ITodoActionTypes.CREATE_TODO_SUCCESS | ITodoActionTypes.CREATE_TODO;
    payload: string
}

export interface IDeleteAction {
    type: ITodoActionTypes.DELETE_TODO_SUCCESS | ITodoActionTypes.DELETE_TODO;
    payload: string
}

export interface IGetAction {
    type: ITodoActionTypes.GET_TODOS_SUCCESS | ITodoActionTypes.GET_TODOS;
    payload?: ITodoState
}

export interface ICompleteAction<T> {
    type: ITodoActionTypes.COMPLETE_TODO_SUCCESS | ITodoActionTypes.COMPLETE_TODO;
    payload: T
}

export interface IEditAction {
    type: ITodoActionTypes.EDIT_TODO_SUCCESS | ITodoActionTypes.EDIT_TODO;
    payload: IEditTodo,
    id: string
}

export interface IShowAlertAction {
    type: ITodoActionTypes.SHOW_ALERT;
    payload: string,
    status: string
}

export interface IHideAlertAction {
    type: ITodoActionTypes.HIDE_ALERT;
}

export type ITodoAction = ICreateAction | IDeleteAction | IGetAction | ICompleteAction<ITodo | string> | IEditAction
export type IAlertAction = IShowAlertAction | IHideAlertAction