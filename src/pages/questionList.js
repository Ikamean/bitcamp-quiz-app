import React from 'react'
import { useSelector } from 'react-redux'
import Question from '../components/question'
import Expired from '../components/expired'
import Result from './result'

const QuestionList = () => {
 let questions = useSelector(state=>state.questions.questions)
 let questionID = useSelector(state=> state.result.questionID)


 if(questions.length < 2) return <Expired />

 if(questionID === 8) return <Result />

 return(
         <Question question={questions[questionID]} />
 )
 
}

export default QuestionList