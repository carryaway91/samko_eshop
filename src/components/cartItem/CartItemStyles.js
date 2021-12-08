import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid black;
    .photoDetails {
        display: flex;
        width: 60%;
    }

    .image {
        width: 12rem;
        margin-right: 1rem
    }

    .photoInfo {
        width: 40%;
        .info {
            font-weight: bold
        }
    }

    .otherDetailsContainer {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            width: 100%
        }
        span:first-child {
            width: 24%
        }
    }
`

export const Remove = styled.button`
    color: #777;
    background: transparent;
    border: none;
    text-decoration: underline;
    padding-top: .5rem;
    cursor: pointer
`