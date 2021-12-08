import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    .detailsContainer {
        flex: 1.5;
        position: relative;
        top: 0.6rem;
    }
    .summaryContainer {
        display: flex;
        flex: 1;
        justify-content: right;
    }
`
export const CartInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: .5rem;

    .details {
        width: 60%
    }

    .otherDetails {
        width: 40%;
        display: flex;
        justify-content: space-between;
    }
`
