import { Link } from 'react-router-dom'
import { Wrapper, BuyButton} from './SummaryStyle'

const Summary = ({totalCost, totalItems, changeShipping, goToCheckout}) => {
    return (
        <Wrapper>
            <h3>Sumár objednávky</h3>
            <div className="hr" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h5 style={{ margin: 0}}>POLOŽKY</h5>
                <span style={{ fontWeight: 'bold'}}>{totalItems}</span>
            </div>
            <h5>Poštovné</h5>
            <div>
                <select onChange={(e) => changeShipping(e.target.value)}>
                    <option value="4">Štandard - 4&euro;</option>
                    <option value="9">Priority Line - 9&euro;</option>
                </select>
            </div>
            <div className="hr" style={{ marginTop: '1.5rem'}} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                <h5 style={{ margin: 0}}>Spolu</h5>
                <span style={{ fontWeight: 'bold'}}>{totalCost}&euro;</span>
            </div>
            <Link to="/order-summary">
                <BuyButton onClick={() => goToCheckout(totalCost)}>
                    Ísť na checkout
                </BuyButton>
            </Link>
        </Wrapper>
    )
}

export default Summary