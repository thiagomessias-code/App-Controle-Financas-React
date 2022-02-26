import styled from "styled-components";
import {darken, transparentize} from 'polished';

export const Container = styled.form`
h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}
input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0%.25rem;
    background: #e7e9ee;
    border: 1px solid #e7e7e7;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
        color: var(--text-body);
    }
    & + input {
        margin-top: 1rem;
    }
}
button[type="submit"] {
        width: 100%;
        padding: 0 1rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius:  0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600;
        &:hover  {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionsTypeContainer = styled.div`
margin: 1rem;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 8.5rem;
    
`;

interface RadioBoxProps  {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red:'#e52e40'
}

export const RadioBox = styled.button<RadioBoxProps>`
height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /*Passar propriedades para o elemento via props */
    background: ${(props) => props.isActive
     ? transparentize(0.9, colors[props.activeColor]) 
     : 'transparent'};
    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

img {
width: 20px;
height: 28px;
}
span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
}
`;
