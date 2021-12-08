import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const OrderBtn = styled.button`
    background: blue;
    color: white;
    padding: 1rem 2rem;
    border-radius: .2rem;
    border: none;
    transition: .1s all ease-in-out;
    width: 11.5rem;
    margin-top: 3rem;
    &:hover, &:focus {
        background: #181854;
        cursor: pointer;
        outline: none
    }
`