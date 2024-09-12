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
min-width: 41.5rem;
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

const inputStyle = styled.input`
  background: transparent;
  color: ${(props)=> props.theme["gray-100"]};
  border: none;
  border-bottom: 2px solid ${(props)=> props.theme["gray-300"]};
  
  font-size: 1.125rem;
    font-weight: bold;  
    height: 2.5rem;
    padding: 0 0.5rem; 

    &::placeholder{
        color: ${(props)=> props.theme["gray-300"]};
    }
    &:focus{
        border-bottom-color: ${(props)=> props.theme["green-500"]};
        box-shadow: none;
    }
`;

export const TaskInput = styled(inputStyle)`
flex: 1;

    &::-webkit-calendar-picker-indicator{
    display: none !important;

}
`;

export const MinutesInput = styled(inputStyle)`
width: 4rem;
`;

export const StartCountdownButton = styled.button`
background: ${(props)=> props.theme["green-500"]};
color: ${(props)=> props.theme["gray-100"]};
border: none;
padding: 1rem ;
border-radius: 8px;
display : flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
width: 100%;
cursor: pointer;
font-weight: bold;

&:disabled{
    opacity: 0.7;
    cursor: not-allowed;
}

&:not(:disabled):hover{
    background: ${(props)=> props.theme["green-700"]};
}
`;