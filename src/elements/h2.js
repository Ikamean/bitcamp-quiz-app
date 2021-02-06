import styled from "styled-components";

export const H2 = styled.h2 `
    color: ${ props => props.color } ;
    font-family: 'Sriracha', cursive;
    text-align: left;
    
    @media (min-width: 768px) {
        margin-left: ${ props => props.marginLeft };
        width: ${ props => props.width }
  }
`