import { createReducer, on } from "@ngrx/store"

export const APPOINTMENT_FEATURE_NAME = 'appointment'

// export interface Appointment {
//   date: Date;
//   appointment: string;
// }

// export interface AppointmentState {
//   loading: boolean
//   appointment: Appointment[]
// }

// const initialState: AppointmentState = {
//   loading: false,
//   appointment: [],
// }

// export const TodoReducer = createReducer(
//   initialState,
  // on(getAll, add, remove, state => ({
  //   ...state,
  //   loading: true
  // })),

  // on(loadingStatusDelay, state => ({
  //   ...state,
  //   loadingDelay: state.loading ? true : false
  // })),

  //  on(todoFailed, (state, { serverError }) => ({
  //   ...state,
  //   todoData: [],
  //   loading: false,
  //   loadingDelay: false,
  //   serverError,
  //  })),

  // on(todoSuccess, (state, { todoData }) => ({
  //   ...state,
  //   todoData,
  //   loading: false,
  //   loadingDelay: false,
  //   serverError: '',
  // })),

  // on(todoAddSuccess, (state, { todo }) => ({
  //   ...state,
  //   todoData: [todo, ...state.todoData ],
  //   loading: false,
  //   loadingDelay: false,
  //   serverError: '',
  // })),

  // on(todoRemoveSuccess, (state, { id }) => ({
  //   ...state,
  //   todoData: state.todoData.filter(todo => todo.id !== id),
  //   loading: false,
  //   loadingDelay: false,
  //   serverError: '',
  // })),

  // on(todoUpdateSuccess, (state, { updateTodo }) => ({
  //   ...state,
  //   todoData: state.todoData.map(
  //     item => item.id !== updateTodo.id ? item : { ...item, ...updateTodo }
  //   ),
  //   loading: false,
  //   loadingDelay: false,
  //   serverError: '',
  // })),

  // on(todoSetFilter, (state, { filterTodo }) => ({
  //   ...state,
  //   filterTodo,
  // })),

  // on(todoEditOneSet, (state, { id, isEdit }) => ({
  //   ...state,
  //   todoData: state.todoData.map(todo => todo.id === id ? { ...todo, isEdit } : todo)
  // })),
// )
