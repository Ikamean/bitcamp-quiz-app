import styled from "styled-components";

export const Button = styled.button `
    padding: 20px;
    border-radius: ${ props => props.radius };
    border: none;
    color: ${ props=> props.color? props.color : 'white' };
    background-color: ${ props => props.bgColor };
    font-size: 16px;
    height: ${props=> props.height};
    margin-top: ${ props=> props.margin };
    width: ${ props=> props.width && props.width };
    margin-left: ${ props => props.marginLeft };
    margin-right: ${ props => props.marginRight };
    
    &:hover{
        background-color: ${ props=> props.hover  } ;
        cursor: pointer;
        box-shadow:  ${props => props.shadow  } ;
        font-size: 20px;
        color: ${ props => props.color? props.color : 'white' };
        border: ${ props => props.border }
    }
   
    

    
    &:focus:active, :active, :focus {
        border: none;
        outline: 0;
        box-shadow: none;
    }

    &:active{
        background-color: ${ props => props.hover }
    }

    

    @media (min-width: 768px) {
        height: ${ props=> props.height };
        margin-top: ${props=> props.margin && props.margin};
        text-align: ${ props => props.align };

        &:focus:active, :active, :focus {
        border: none;
        outline: 0;
        box-shadow: none;
        background-color: none;
    }
  }
    
`