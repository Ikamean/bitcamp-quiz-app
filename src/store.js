import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from './reducer/categoryReducer'
import tokenReducer from './reducer/tokenReducer'
import difficultyReducer from './reducer/difficultyReducer'
import questionsReducer from './reducer/questionsReducer'
import resultReducer from './reducer/resultReducer'
import answersReducer from './reducer/answersReducer'


const reducer = combineReducers({
    category: categoryReducer,
    questions : questionsReducer,
    token: tokenReducer,
    difficulty : difficultyReducer,
    result: resultReducer,
    answers: answersReducer
})

const store = createStore(reducer,applyMiddleware(thunk))

export default store