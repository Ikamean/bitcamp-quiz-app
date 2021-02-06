import React from 'react'
import { Correct, CorrectAnswer } from '../elements/correct'

const Answer = ({data}) => {

    return (
        <Correct bgColor='#fc5c65'  width='50%' >

                {data.question} <CorrectAnswer bgColor='#20bf6b' width='100px'> {data.answer} </CorrectAnswer>

        </Correct>
    )
}

export default Answer


