import { getToken, resetToken } from '../services/quiz'


const initialState = {
    "token" : '',
}
  
const tokenReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Initialize_Token' : 
            let tkn = action.data
            state = {...state, token : tkn }
            return state
        default : return state
    }
}



export const initializeToken = token => {
    return async dispatch => {
        let res = await getToken()
        if(res.response_code === 4 )
        res = await resetToken(token)
        dispatch({
            type: 'Initialize_Token',
            data: res.token
        })
    }
}

export default tokenReducer