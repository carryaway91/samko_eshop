import { CartInfoHeader, Wrapper } from './CartStyles'
import { useState, useEffect } from 'react'
import CartItem from '../../components/cartItem/CartItem'
import Summary from '../../components/summary/Summary'


const Cart = ({filteredData, filterData, clearCart, sendTotalCost, itemRemoved}) => {
    const [shippingPrice, setShippingPrice] = useState(4)
    const [totalCost, setTotalCost] = useState()
    const [totalItems, setTotalItems] = useState()
    const [data, setData] = useState()


    // vyber obsah cartu z localStorage a uloz ho lokalne do containera
    useEffect(() => {
        checkLocalStorage()
    }, [])

    useEffect(() => {
        sendTotalCost(totalCost)
    }, [totalCost])
   
    useEffect(() => {
        if(filteredData !== undefined) {
            calculateTotalPrice()
            calculateTotalItems()
        }
        if(filteredData && filteredData.length == 0) {
            setTotalCost(0)
        }
    },[filteredData])
    
    const checkLocalStorage = () => {
        const cartItems = localStorage.getItem('cartItems')
        setData(JSON.parse(cartItems))
        itemRemoved()
    }

    const calculateTotalPrice = () => {
        let price = 0
        for(let i = 0; i <= filteredData.length - 1; i++) {
            price = price + filteredData[i].cost * filteredData[i].qt
        } 
        setTotalCost(price + shippingPrice)
    }

    const calculateTotalItems = () => {
        let itemsLength = 0
        for(let i = 0; i <= filteredData.length - 1; i++) {
            itemsLength = itemsLength + filteredData[i].qt
        } 
        setTotalItems(itemsLength)
    }


    const handleChangeQt = (id, qt) => {
        let changedQt = []
        changedQt = filteredData.map(i => {
            if(i.id === id) {
               return { 
                    id: i.product_ID,
                    name: i.product_name,
                    cost: i.product_price,
                    img: i.img_url,
                    qt: qt}
            } else {
                return i
            }
        })
        filterData(changedQt)
    }

    const handleChangeShipping = cost => {
        localStorage.setItem('shipping', JSON.stringify(cost))
        if(filteredData.length > 0) {

            if(+cost === 9) {
                setTotalCost(totalCost + 5)
            } else {
                setTotalCost(totalCost - 5)
            }
        }

        if(filteredData === []) {
            setTotalCost(0)
        }
    }

    const handleGoToCheckout = (total) => {
       localStorage.setItem('cartItems', JSON.stringify([]))
       localStorage.setItem('checkoutItems', JSON.stringify(data))
       localStorage.setItem('totalCost', JSON.stringify(total))
       clearCart()
    }


    return (
        <Wrapper>
            <div className="detailsContainer" style={{ display: 'flex', flexDirection: 'column'}}>
                <h3>Nákupný košík</h3>
                { !filteredData || filteredData.length == 0 ? 
                <h3>Váš košík je prázdny</h3> 
                :
                <CartInfoHeader>
                    <span className="details">DETAILY O PRODUKTE</span>
                    <div className="otherDetails">
                        <span>QUANTITA</span>
                        <span>CENA</span>
                        <span>SPOLU</span>
                    </div>
                </CartInfoHeader>
                }
                {
                    filteredData && filteredData.map((i, idx) => (
                        <CartItem 
                            key={idx}
                            id={i.id}
                            name={i.name}
                            cost={i.cost}
                            img={i.img}
                            qt={i.qt}
                            costWithQuantity={(id, qt) => handleChangeQt(id, qt)}
                            removeItem={() => checkLocalStorage()}
                            />
                            ))
                    }
            </div>
            { filteredData && filteredData.length > 0 && (

                <div className="summaryContainer">
              <Summary 
                totalCost={totalCost}
                totalItems={totalItems}
                changeShipping={(cost) => handleChangeShipping(cost)}
                goToCheckout={(totalCost) => handleGoToCheckout(totalCost)}
                />
            </div>
                )}
        </Wrapper>
    )
}

export default Cart