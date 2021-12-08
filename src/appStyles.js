import styled from 'styled-components'

export const Header = styled.header`
    height: 150px;
    display: flex;
    align-items: center;
    width: 60%;
    position: relative;
    margin: 0 auto;
    justify-content: space-between;
`

export const CartIcon = styled.span`
`

export const CartNotification = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f74a4a;
    color: white;
    position: absolute;
    bottom: 5px;
    right: 3rem;
    font-size: .7rem
`

export const Cost = styled.span`
    vertical-align: top;
    position: relative;
    top: 5px;
    color: #467848;
    margin-left: .5rem;
    text-decoration: none;
    font-weight: bold
`