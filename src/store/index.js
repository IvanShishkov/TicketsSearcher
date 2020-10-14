import { createStore, combineReducers } from 'redux'
import { cardReducer } from './reducer/card'

const rootReducer = combineReducers({
    card: cardReducer,
})

export default createStore(rootReducer)
