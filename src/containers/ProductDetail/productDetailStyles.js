import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between
`

export const Img = styled.img`
    width: 25rem;
    margin-right: 2rem
`
export const Header = styled.h2`
    color: navy
`

export const Button = styled.button`
    background: navy;
    border-radius: .2rem;
    border: none;
    color: white;
    padding: 1rem 2rem;
    margin-left: 3rem;
    transition: all .1s ease-in-out;

    &:hover {
        background: #444470;
        cursor: pointer
    }

`

export const AddToCart = styled.div`
    color: blue;
    font-weight: bold
`

