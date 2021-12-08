import { Container, Header } from './productItemStyles'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'


const ProductItem = ({product}) => {
    
    const { addToCart } = useContext(CartContext)

    return (
        <Container>
            <Link to={`/product/${product.product_ID}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '1rem'}}>
                <div>
                    <Header>{product.product_name}</Header>
                    <p>{ product.card_description }</p>
                </div>
                <div>
                    <img src={product.img_url} style={{ width: '100%'}} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                        <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '2rem',  margin: '0' }}>{product.product_price}&euro;</p>
                        { product.product_pieces_WH > 4 && <p style={{ color: 'green', fontWeight: 'bold'}}>{product.product_pieces_WH } kusov na sklade</p> }
                        { product.product_pieces_WH < 5 && product.product_pieces_WH > 1 && <p style={{ color: 'red', fontWeight: 'bold'}}>Posledné {product.product_pieces_WH } kusy na sklade!</p> }
                        { product.product_pieces_WH === 1 && <p style={{fontWeight: 'bold', color: 'red'}}>Posledný kus na sklade!</p> }
                        { product.product_pieces_WH === 0&& <p style={{ color: 'red', fontWeight: 'bold'}}>Vypredané!</p> }
                    </div>
                </div>
            </Link>
        </Container>
    )
}

export default ProductItem