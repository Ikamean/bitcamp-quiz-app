import styled from "styled-components";

export const Grid = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #FFC312;
    padding: 50px;
    
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: auto auto auto auto;
        height: 100vh;
  }
`