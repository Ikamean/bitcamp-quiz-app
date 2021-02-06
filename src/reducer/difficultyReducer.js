
const initialState = {
    "difficulty" : 'easy'
}
  
const difficultyReducer = (state=initialState, action) => {
    switch(action.type){
        case 'easy' : 
            return {...state, difficulty : 'easy' }
        case 'medium' :
            return {...state, difficulty : 'medium'}
        case 'hard' :
            return {...state,difficulty : 'hard'}
        default : return state
    }
}



export const setEasy = () => {
    return dispatch => {
        dispatch({
            type: 'easy'
        })
    }
}

export const setMedium = () => {
    return dispatch => {
        dispatch({
            type: 'medium'
        })
    }
}

export const setHard = () => {
    return dispatch => {
        dispatch({
            type: 'hard'
        })
    }
}


export default difficultyReducer