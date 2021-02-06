import styled from "styled-components";

export const Div = styled.div `
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    background-color: #eb3b5a;
    @media (min-width: 768px) {
        height: 100vh;
  }
    
`

export const ResetButton = styled.button ` 
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    margin-top: 10px;
    width: 30%;

&:hover{
    cursor: pointer;
    background-color: #fed330;
    font-size: 16px;
}
`

export const Score = styled.h2 `
    
`