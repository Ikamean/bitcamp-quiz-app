import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { initializeCategories } from '../reducer/categoryReducer'
import { initializeToken } from '../reducer/tokenReducer'
import { useDispatch, useSelector } from 'react-redux'
import {  Div } from '../elements/div'
import { Button } from '../elements/button'

const StartPage = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    let token = useSelector(state=>state.token.token)

    useEffect(()=>{

        const getData = async () =>{
          await  dispatch(initializeCategories())
          await  dispatch(initializeToken(token))
        }
        
        getData()
        
       },[dispatch])

    return (
        <Div color='#EA2027' height='100vh'>
    
            <Button  radius='10px' height='10%' margin='45vh' color='#242b2b' shadow='2px 5px #066f7d' 
            onClick={()=>history.push('/category')}> Start Quizz </Button>
            
        </Div>
    )
}

export default StartPage