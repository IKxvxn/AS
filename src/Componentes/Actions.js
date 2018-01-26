const ADD_TODO = 'ADD_TODO'
const LOAD_TODO = 'LOAD_TODO'
const DONE_TODO = 'DONE_TODO'
const DELETE_TODO = 'DELETE_TODO'

export const addTodo = value => {
  return {
    type: ADD_TODO,
    value
  }
}

export const loadTodo = value => {
  return {
    type: LOAD_TODO,
    value
  }
}

export const doneTodo = id => {
  return {
    type: DONE_TODO,
    id
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}