import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;
    margin-bottom: 1rem;

    .desc {
        width: 80%;

        h4 {
            margin-top: 0;
            margin-bottom: .5rem;
        }
        p {
            color: gray;
            margin-top: 0;
        }
    }

    .cost {
        width: 20%;
        color: blue;
        font-weight: bold;
        display:flex;
        justify-content: flex-end
    }
`