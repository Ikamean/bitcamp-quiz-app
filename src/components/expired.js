import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Expired = () => {

    const history = useHistory()


return (
    <BtnContainer>
    
            <Restart onClick={()=> history.push('/')}> Ooopss.. Restart</Restart>

    </BtnContainer>
)
}

export default Expired

const Restart = styled.button`
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover{
        background-color: red;
        box-shadow: 1px 1px black;
        transition: 0.5s all ease;

    }

`

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`