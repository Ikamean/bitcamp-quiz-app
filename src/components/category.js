import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, initializeQuestions } from '../reducer/questionsReducer'
import { useHistory } from 'react-router-dom'
import { Button } from '../elements/button'



const Category = ({category}) => {
    const dispatch = useDispatch()
    let history = useHistory()
    let difficulty = useSelector(state=>state.difficulty.difficulty)
    let token = useSelector(state=>state.token.token)

    const questions = async ()  =>{
       await dispatch(setCategoryId(category.id))
       await dispatch(initializeQuestions(category.id,difficulty,token))
       history.push('/difficulty')
    }   
    

    return(
   
        <Button border='1px solid black;' color='#1e272e' width='100%' radius='10px'  bgColor='#FFC312'   onClick={questions} > 
        
            {category.name} 
        
        </Button>

    )
}

export default Category