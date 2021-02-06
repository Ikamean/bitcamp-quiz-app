import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetResult } from '../reducer/resultReducer'
import { resetAnswers } from '../reducer/answersReducer'
import  Answer  from '../components/answer'
import { Div, ResetButton,Score } from '../elements/resultDiv'
import { H2 } from '../elements/h2'


const Result = () => {
    const myRegex = /&quot;|&#\d+;/gi
    const forwardTag = /&lt;/gi
    const backTag = /&gt;/gi
    const uumlReg = /&Uuml;|&amp;/gi
    const pokReg = /&|acute;/

    const dispatch = useDispatch()
    let history = useHistory()
    let points = useSelector(state=>state.result.result)
    let answers = useSelector(state=> state.answers.finalResult)

    answers.map(a=>
        a.answer.replace(myRegex,'\'')
        .replace(forwardTag,'<')
        .replace(backTag,'>')
        .replace(uumlReg,'')
        .replace(pokReg,'')
        )


    const handleReset = () =>{

        dispatch(resetResult())
        dispatch(resetAnswers())
        history.push('/')
    }

    return(         
                    
                    <Div>
                        
                        <Score>
                            Score : {points}
                        </Score>

                        <ResetButton onClick={()=>handleReset()}  >
                                Play Again
                        </ResetButton>
                       
                        <H2 color='white'>Answers</H2>  
                        {answers.map((a,i)=>
                            <Answer data={a} key={i} />
                            )}
                    </Div>
                             
    )
}

export default Result