import styled from "styled-components";

export const Correct = styled.div `
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: left;
    text-align: center;
    background-color: ${props => props.bgColor};
    padding: 3px;
    color: white;
    border: none;
    margin: 2px;
    border-radius: 10px;
    width: 100%;
    

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: ${ props => props.width };
        font-size: 12px;
    }
`
export const CorrectAnswer = styled.div `
    background-color: ${props => props.bgColor};
    width: 100%;
    padding: 3px;
    color: white;
    border: none;
    border-radius: 10px;

    @media (min-width: 768px) {
        width: 40%;
        font-size: 12px;
        height: 100%;
        display:flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
`