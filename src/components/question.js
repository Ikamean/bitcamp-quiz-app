import React from 'react'
import { increasePoints, nextQuestion } from '../reducer/resultReducer'
import { finalAnswers } from '../reducer/answersReducer'
import { useDispatch } from 'react-redux'
import { Button } from '../elements/button'
import { Div } from '../elements/div'
import { H2 } from '../elements/h2'


const Question = ({question}) => {
    const dispatch = useDispatch()
    
    
    const myRegex = /&quot;|&#\d+;/gi
    const forwardTag = /&lt;/gi
    const backTag = /&gt;/gi
    const uumlReg = /&Uuml;|&amp;/gi
    const pokReg = /&|acute;/

    let quizQuestion = question.question
    quizQuestion = quizQuestion.replace(myRegex,'\'').replace(pokReg,'')

    let answers = []
    answers = answers.concat(question.correct_answer)
    .concat(question.incorrect_answers)
    .map(a=> a.replace(myRegex,'\''))
    .map(a=> a.replace(backTag,'>'))
    .map(a=> a.replace(forwardTag,'<'))
    .map(a=> a.replace(uumlReg,''))

    
    let correct = question.correct_answer
    
    let finalAnswerObj = { 
        "question" : quizQuestion,
        "answer" : correct
    }
    

    const handleAnswer = answer => {

        dispatch(nextQuestion())
        dispatch(finalAnswers(finalAnswerObj))

        if ( answer === correct  ) {
            dispatch(increasePoints())
        }
    }
    
    
    return(
        <Div color='#192a56' direction='column' height='100vh' padding='30px' width='100%' >
            <H2 color='#f5f6fa'  marginLeft='20vw' width='50%'> { quizQuestion } </H2>
                <Div direction='column'  width='50%' marginLeft='20vw'>
                    { answers.map ( ( answer,i ) =>  

                        <Button  shadow='2px 5px #485460' radius='10px' hover='#ff3f34' align='left' 
                        bgColor='#EA2027' key={i} onClick={()=>handleAnswer(answer) } > 
                        
                            { answer } 

                        </Button>  
                    )}
                </Div>
        </Div>
    )
}

export default Question