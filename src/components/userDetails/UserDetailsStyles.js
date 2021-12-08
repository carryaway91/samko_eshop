import styled from 'styled-components'

export const Form = styled.form`
    .flex {
        display: flex;
        align-self: baseline
    }
    label {
        margin-top: 1rem;
        line-height: 2rem
    }
`

export const Input = styled.input`
    padding: .5rem;
    margim-top: 1rem;
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    border: 1px solid lightgray;
    border-radius: .2rem;

    &:focus {
        outline: 1px solid navy;
        border: 1px solid navy
    }
`