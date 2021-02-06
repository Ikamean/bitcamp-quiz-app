import { getQuestions } from '../services/quiz'


const initialState = {
    "questions" : [],
    "id" : ''
}
  
const questionsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Initialize_Questions' : 
            let questionlist = action.data.results
            state = { ...state, questions : questionlist }
            return state
        case 'set_ID' :
            let id = action.data
            state = {...state, id : id }
            return state
        default : return state
    }
}



export const initializeQuestions = (id,difficulty,token) => {
    return async dispatch => {
        let res = await getQuestions(id,difficulty,token)
        dispatch({
            type: 'Initialize_Questions',
            data: res
        })
    }
}

export const setCategoryId = (id) => {
    return dispatch => {
        dispatch({
            type: 'set_ID',
            data: id
        })
    }
}

export default questionsReducer