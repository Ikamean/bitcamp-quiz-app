const initialState = {
   'finalResult' : []
}
  
const answersReducer = (state=initialState, action) => {
    switch(action.type){
        case 'setAnswers' :
            let answer = action.data
           return {...state, finalResult : state.finalResult.concat(answer) }
        case 'reset' : 
            return {...state, "finalResult" : []}     
        default : return state
    }
}

export const resetAnswers = () => {
    return dispatch => {
        dispatch({
            type: 'reset'
        })
    }
}

export const finalAnswers = (obj) => {
    return dispatch  => {
        dispatch({
            type: 'setAnswers',
            data: obj
        })
    }
}

export default answersReducer