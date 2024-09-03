import styled, { css } from 'styled-components';

export type ButtonVariants =  'primary' | 'secondary' | 'success' | 'danger' ;

interface ButtonContainerProps{
    variant: ButtonVariants;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'white',
    success: 'green',
    danger: 'red',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;
margin: 10px;
border-radius: 5px;
border: none;

 background-color: ${props => props.theme['green-500']}

/* ${props=>{
    return css`
    background-color: ${buttonVariants[props.variant]};
    `
}} */

`;