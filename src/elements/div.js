import styled from "styled-components";



export const Div = styled.div `
    display: flex;
    justify-content: ${ props => props.justify? props.justify : 'center' };
    flex-direction: ${ props => props.direction };
    text-align: ${ props => props.align? props.align : 'center' };
    background-color: ${ props=> props.color  } ;
    width: 100%;
    padding-left: ${ props => props.paddingLeft };
    height: ${ props => props.height  };
    padding: ${ props => props.padding };
    font-size : ${ props => props.fontSize };
    margin-top: ${ props => props.marginTop };

    @media (min-width: 768px) {
        width: ${ props => props.width? props.width : '100%' };
        margin-left: ${ props => props.marginLeft };
    }
`




