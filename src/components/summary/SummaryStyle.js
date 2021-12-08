import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 18rem;
    background: #bbb;
    margin-top: 2rem;
    margin-left: 2rem;
    padding: 1rem 2rem;
    padding-bottom: 3rem;
    align-self: flex-start;

    .hr {
        width: 100%;
        height: 1px;
        background: #ddd;
        margin-bottom: 1.5rem
    }
`


export const BuyButton = styled.button`
    width: 100%;
    padding: .5rem 0;
    background: #444;
    color: white;
    border: none;
    transition: .1s all ease-in-out; 

    &:hover {
        cursor: pointer;
        background: #555
    }
`