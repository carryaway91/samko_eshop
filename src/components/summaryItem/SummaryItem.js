import { Container } from './SummaryItemStyles'

const SummaryItem = ({i}) => {
    return (
        <Container>
            <div className="desc">
                <h4>{i.qt}x {i.name}</h4>
                <p>{i.desc}</p>
            </div>
            <div className="cost">
                {+i.cost * +i.qt }&euro;
            </div>
        </Container>
    )
}

export default SummaryItem