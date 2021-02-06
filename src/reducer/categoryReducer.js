import { getCategories } from '../services/quiz'


const initialState = {
    "categorieArray" : [],
}
  
const categoryReducer = (state=initialState, action) => {
    switch(action.type){
        case 'get_categorieList' : 
            let categories = action.data.trivia_categories
            state = {...state, categorieArray : categories }
            return state
        default : return state
    }
}



export const initializeCategories = () => {
    return async dispatch => {
        let list = await getCategories()
        dispatch({
            type: 'get_categorieList',
            data: list
        })
    }
}

export default categoryReducer

