import uuid from 'uuid/v1'

const DEFAULT_STATE = {
  ToDo: []
}

const ToDo = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        ToDo: [...state.ToDo, {
          Value: action.value,
          Done: false,
          Key: uuid()
        }],
      }
    case 'DONE_TODO':{
      return{
        ToDo:[...state.ToDo.slice(0,action.id),{
          Value:state.ToDo[action.id].Value,
          Done: true,
          Key: state.ToDo[action.id].Key
        },
        ...state.ToDo.slice(++action.id)
        ]
      }
    }
    case 'DELETE_TODO':{
      return{
        ToDo: [...state.ToDo.slice(0,action.id),
        ...state.ToDo.slice(++action.id)
        ]
      }
    }
    case 'LOAD_TODO':
      return{
        ToDo: [...action.value],
      }
    default:
      return state
  }
}

export default ToDo