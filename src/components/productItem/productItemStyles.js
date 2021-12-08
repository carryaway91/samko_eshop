import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    margin: 1rem;
    word-break: break;
    box-shadow: 0 2px 8px 1px lightgray;
    transition: all .1s ease-in-out;
    position: relative;
    top: 0;
    background: white;
    &:hover {
        top: -5px
    }
    
    a {
        text-decoration: none
    }
`


export const Header = styled.h1`
    color: navy;
    font-size: 1rem;
    font-weight: bold;
`