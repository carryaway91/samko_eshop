import { Container } from './CartSummaryStyles'
import SummaryItem from '../summaryItem/SummaryItem'


const CartSummary = ({data, total}) => {
    return (
        <Container>
            <h2>Položky</h2>
            {
                data && data.map(i => <SummaryItem i={i} /> )
            }
            <p className="total">
                <strong>Spolu: { total }&euro;</strong>
            </p>
        </Container>
    )
}

export default CartSummary