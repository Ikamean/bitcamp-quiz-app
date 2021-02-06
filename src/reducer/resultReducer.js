const initialState = {
    "result" : 0,
    "questionID" : 0
}
  
const resultReducer = (state=initialState, action) => {
    switch(action.type){
        case 'increase' : 
            return {...state, result : state.result + 1}
        case 'reset' :
            return {...state, result : 0, questionID : 0  }
        case 'next_question' :
            return {...state, questionID : state.questionID + 1 }
        default : return state
    }
}

export const nextQuestion = () => {
    return dispatch => {
        dispatch({
            type: 'next_question'
        })
    }
}

export const increasePoints = () => {
    return  dispatch => {
        dispatch({
            type: 'increase',
        })
    }
}

export const resetResult = () => {
    return dispatch => {
        dispatch({
            type: 'reset'
        })
    }
}

export default resultReducer
