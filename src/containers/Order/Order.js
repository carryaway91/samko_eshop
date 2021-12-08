import { useEffect, useState } from 'react'
import { Container, OrderBtn } from './OrderStyles'
import UserDetails from '../../components/userDetails/UserDetails'
import CartSummary from '../../components/cartSummary/CartSummary'



const Order = () => {
    const [items, setItems] = useState([])
    const [totalCost, setTotalCost] = useState()
    const [filteredData, setFilteredData] = useState()

    
    useEffect(() => {
        const localItems = JSON.parse(localStorage.getItem('checkoutItems'))
        const total = JSON.parse(localStorage.getItem('totalCost'))
        setItems(localItems)
        setTotalCost(total)
    },[])

    useEffect(() => {
        if(items && totalCost) {
            filterData()
        }
    }, [items, totalCost])

    const filterData = () => {
        const ids = items.map(i => i.product_ID)
        let idsWithQt = []
        for(let i = 0; i <= items.length - 1; i++) {
            idsWithQt.push({ 
                id: items[i].product_ID,
                name: items[i].product_name,
                cost: items[i].product_price,
                desc: items[i].card_description,
                img: items[i].img_url,
                qt: ids.filter(val => (val === items[i].product_ID)).length
            })
        }
    
        let unique = removeDuplicatesItems(idsWithQt, 'id')
        setFilteredData(unique)
    }

    const removeDuplicatesItems = (array, key) => {
        return [...new Map(array.map(item => [item[key], item])).values()]
    }
    return (
        <div>
            <h2>Informácie o platiteľovi</h2>
            <Container>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <UserDetails />
                    <OrderBtn>Objednať</OrderBtn>
                </div>                
                {
                    filteredData && <CartSummary data={filteredData} total={totalCost} />
                }
            </Container>
        </div>
    )
}

export default Order