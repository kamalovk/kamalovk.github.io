import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'

import rootReducers from './reducers'

const configureStore = (reducers = {}, preLoadedState = {}, middlewares = [])  => createStore(
  combineReducers({
    
    ...rootReducers,
    ...reducers
  }
  ),
  preLoadedState,  
  compose(
    applyMiddleware(
      ...middlewares,
      thunk
    )
  )
);
export default configureStore;