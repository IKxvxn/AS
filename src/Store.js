import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'

import todoReducer from './Componentes/Reducer_ToDo'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})

const Store = createStore(todoReducer, composeWithDevTools(
  applyMiddleware(
    logger,
  ),
))

export default Store