import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3b9fd9;
    width: 100%;
    position: relative;

    a {
        text-decoration: none;
        font-weight: bold;
        transition: all .1s ease-in-out;
        &:hover {
            background: navy
        }
    }
`

export const Inner = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
        padding: 2rem 3rem;
        position: relative;

        &:hover {
            cursor: pointer;
        }
    }
`

export const Item = styled.li`
    width: 100%;
    height: 100%;
    &:hover {
        div {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap
        }
    }
    color: white
`

export const Context = styled.div`
    width: 25rem;
    height: 20rem;
    top: 5.3rem;
    left: 0rem; 
    box-shadow: 0 1px 1px 1px lightgray;
    border: 1px solid gray;
    display: none;
    position: absolute;
    background: white;

    li {
        padding: 1rem 3rem
    }
`