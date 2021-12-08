import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../CartContext/CartContext'
import { Content, Remove } from './CartItemStyles'

const CartItem = ({id, name, cost, img, qt, costWithQuantity, removeItem }) => {
    const [totalCostForItem, setTotalCostForItem] = useState()

    const { addToCart, removeFromCart, removeOneFromCart } = useContext(CartContext)

    useEffect(() => {
        if(qt && cost) {
            handleTotalCostForItem()
        }
    },[qt, cost])

    const handleTotalCostForItem = () => {
        setTotalCostForItem(qt * cost)
    }

    const handleChangeQt = e => {
        if(qt < +e.target.value) {
            addToCart(id)
        } else {
            removeOneFromCart(id)
        }
        handleTotalCostForItem()
        costWithQuantity(id, +e.target.value)
    }

    const handleRemoveFromCart = id => {
        removeFromCart(id)
        removeItem()
    }


    return (
        <Content>
            <div className="photoDetails">
                <img className="image" src={img} />
                <div className="photoInfo">
                    <Link to={`/product/${id}`} style={{ color: 'navy', textDecoration: 'none'}}><h3>{ name }</h3></Link>
                </div>
            </div>
            <div className="otherDetailsContainer">
                <div style={{ display: 'flex', flexDirection: 'column', width: '4rem'}}>
                    <span style={{ width: '100%'}}><input type="number" value={qt} onChange={e => handleChangeQt(e)} min="1"/></span>
                    <Remove onClick={() => handleRemoveFromCart(id)}>Odstrániť</Remove>
                </div>
                <span>{ cost }&euro;</span>
                <span>{totalCostForItem}&euro;</span>
            </div>
        </Content>
    )
}

export default CartItem