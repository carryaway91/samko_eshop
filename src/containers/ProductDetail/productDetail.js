
import { Container, Img, Header, Button, AddToCart, Details } from './productDetailStyles'
import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'

const ProductDetail = ({products, addToCart, addedToCart, sendTotalCost}) => {
    const { id } = useParams()
    
    const [product, setProduct] = useState()



    useEffect(() => {
        let product;
        if(products) {
            console.log(id)
          product = products.find(p => p.product_ID === +id)
        }
        setProduct(product)

    },[products])

    const handleAddedToCart = (id, price) => {
        addToCart(id)
        sendTotalCost(price)
    }

    return (
        <Container>
            <div>
        {
                product && (
                    <div style={{ display: 'flex'}}>
                        
                    <Img src={product.img_url} />
                    <Details>
                        <div>
                            <Header>{ product.product_name }</Header>
                            <p>{ product.short_description }</p>
                            { product.product_pieces_WH > 4 && <p style={{ color: 'green', fontWeight: 'bold'}}>Na sklade {product.product_pieces_WH } kusov</p> }
                            { product.product_pieces_WH < 5 && product.product_pieces_WH > 1 && <p style={{ color: 'red', fontWeight: 'bold'}}>Na sklade posledné {product.product_pieces_WH } kusy!</p> }
                            { product.product_pieces_WH === 1 && <p style={{fontWeight: 'bold', color: 'red'}}>Na sklade posledný kus!</p> }
                            { product.product_pieces_WH === 0&& <p style={{ color: 'red', fontWeight: 'bold'}}>Vypredané!</p> }
                        </div>                        
                        <AddToCart>
                            { product.product_price }&euro;
                            <Button onClick={() => handleAddedToCart(product.product_ID, product.product_price)}>Pridať do košíka</Button>
                        </AddToCart>
                    </Details>
                </div>

                )
            }
            </div>
            {
                product && (
                    <div style={{ marginTop: '3rem'}}>
                        <h2>Popis</h2>
                        { parse(product.long_description) }
                    </div>
                )
            }
        </Container>
    )
}

export default ProductDetail