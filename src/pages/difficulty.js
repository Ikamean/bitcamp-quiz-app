import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setEasy, setMedium, setHard } from '../reducer/difficultyReducer'
import { Button } from '../elements/button'
import { Div } from '../elements/div'


const Difficulty = () => { 
    const dispatch = useDispatch()
    let history = useHistory()
    const difficultyArr = (['Easy','Medium','Hard'])

    const handleDifficulty = (difficulty) => {
        if(difficulty === 'Easy')
            dispatch(setEasy())
        if(difficulty === 'Medium')
            dispatch(setMedium())
        if(difficulty === 'Hard')
            dispatch(setHard())
        history.push('/questions')
    }

    return(

        <Div direction='column' margin='30vh' color='#22a6b3' height='100vh' paddingLeft='30vw'>

            { difficultyArr.map( (difficulty,i) => 

                <Button width='50%' color='black' shadow='#2f3838' bgColor='#22a6b3' radius='10px' hover='#81ecec' key={i} onClick={ ()=>handleDifficulty(difficulty) }> 
                
                {difficulty} 

                </Button> 
            ) }

        </Div>

    )
}

export default Difficulty