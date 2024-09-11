import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
    }
`;

export const FormContainer = styled.div`
width: 100%;
display: flex;
gap: 1rem;
align-items: center;
color: ${(props)=> props.theme['gray-100']};
font-size: 1.125rem;
font-weight: bold;
flex-wrap: wrap;
`;

export const CountdownContainer = styled.div`
color: ${(props)=> props.theme['gray-100']};
font-family: 'Roboto Mono', monospace;
font-size: 10rem;
line-height:8rem;
display: flex;
gap: 1rem;

span{
    background: ${(props)=> props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
}

`;

 export const Separator = styled.div`
    color: ${(props)=> props.theme['green-300']};
    padding: 2rem 3rem 2rem 2.1rem;
    display: flex;
    width: 4rem;
    justify-content: center;
    overflow: hidden;


`;

