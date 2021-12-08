import MainNav from './components/mainNav'
import { Header, CartNotification, CartIcon, Cost } from './appStyles'
import { Routes, Route, Link } from 'react-router-dom'
import Products from './containers/Products/products'
import ProductDetail from './containers/ProductDetail/productDetail'
import Cart from './containers/Cart/Cart'
import Order from './containers/Order/Order'
import { useState, useEffect } from 'react'
import { CartContext } from './CartContext/CartContext'
import axios from 'axios'
import Car from './img/car.png'


const App = () => {
const [products, setProducts] = useState()
const [filteredData, setFilteredData] = useState()
const [categories, setCategories] = useState()
const [selectedProducts, setSelectedProducts] = useState()
const [totalCost, setTotalCost] = useState(0)
const [cartLength, setCartLength] = useState(0)

  //vytiahni produkty z db
  
  useEffect(() => {
    axios.get('https://apisrceshop.herokuapp.com/products?fbclid=IwAR2KinCVuIfQEGLtntPiEs1o5Y9GkhVFQsto7wrRUEJQcGsXmVbdhSyGqsM')
    .then(res => {
      setProducts(res.data.products)
      setSelectedProducts(res.data.products)
    })
    const items = JSON.parse(localStorage.getItem('cartItems'))
    const costs = items.map(i => i.product_price)
    
    if(costs.length > 0) {
      const cost = costs.reduce((prev, curr) => prev + curr)
      
      const shipping = JSON.parse(localStorage.getItem('shipping'))
      setTotalCost(cost + +shipping)
    }
    setCartLength(items.length)
    }, [])

    useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems'))
      if(cartItems == undefined) {
        localStorage.setItem('cartItems', JSON.stringify([]))
      }
      const filtered = handleFilterData(cartItems)
      setFilteredData(filtered)
    },[])
    
  useEffect(() => {
    if(products) {
      let cats = products.map(p => { 
        return { name: p.category_name,
                id: p.category_ID
        }
      })
      const filteredArr = [...new Map(cats.map(item => [item['id'], item])).values()]
      setCategories(filteredArr)
    }
  }, [products])
  

  
  const handleFilterData = (array) => {
    const ids = array.map(i => i.product_ID)
    let idsWithQt = []
    for(let i = 0; i <= array.length - 1; i++) {
        idsWithQt.push({ 
            id: array[i].product_ID,
            name: array[i].product_name,
            cost: array[i].product_price,
            img: array[i].img_url,
            pieces: array[i].product_pieces_WH,
            qt: ids.filter(val => (val === array[i].product_ID)).length
        })
    }

    let unique = removeDuplicatesItems(idsWithQt, 'id')
    return unique
  }


  const removeDuplicatesItems = (array, key) => {
    return [...new Map(array.map(item => [item[key], item])).values()]
  }

  // pridaj item do kosika v localStorage
  const addToCart = id => {
    const itemToAdd = products.find(i => i.product_ID === id)
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))
    cartItems.push(itemToAdd)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    const filtered = handleFilterData(cartItems)
    setFilteredData(filtered)
    setCartLength(state => state + 1)
  }

  // zniz quantity o jeden
  const removeOneFromCart = (id) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))
    const itemToRemove = cartItems.find(i => i.product_ID === id)
    
    const filter = handleFilterData([itemToRemove])
    if(filter[0].qt > 1) {
      filter[0].qt = filter[0].qt - 1
    } else {
      const index = cartItems.findIndex((item, index) => item.product_ID === id ? index : null)
      cartItems.splice(index, 1)
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      const filtered = handleFilterData(cartItems)
      setFilteredData(filtered)
      setCartLength(state => state - 1)
    }


    const filtered = handleFilterData(cartItems)
    setFilteredData(filtered)
  }

  // odstran item z kosika v localStorage
  const removeFromCart = id => {
    const items = JSON.parse(localStorage.getItem('cartItems'))
    setCartLength(items.length)
    const itemsWithoutRemovedOne = items.filter(i => i.product_ID !== id)
    const filter = handleFilterData(itemsWithoutRemovedOne)
    setFilteredData(filter)
    localStorage.setItem('cartItems', JSON.stringify(itemsWithoutRemovedOne))
  }


  const handleShowByCategory = (id) => {
    const selected = products.filter(cat => cat.category_ID === id)
    setSelectedProducts(selected)
  }


  const handleAddedToCart = () => {
    setCartLength(state => state + 1)
  }

  return (
    <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '1rem 0'}}>
      <Header >
      <Link to="/" style={{ position: 'relative', color: 'black', textDecoration: 'none', left: '-22%'}}>
      <img src={Car} width="70" />
        <h2 style={{ position: 'absolute', top: '-0', left: '5rem', fontSize: '2rem'}}>
          Racing.com
        </h2>
        </Link>
        <Link to="/cart" style={{ display: 'flex', justifyContent: 'space-between', width: '75px', position: 'relative', right: '-22%', top:'0rem', background: 'lightgreen', padding: '.4rem', borderRadius: '.5rem', textDecoration: 'none'}}>
            <CartIcon>
            <svg viewBox="0 0 483.1 483.1" width="30" height="30" fill="green">
                <g>
                    <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6
                        c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3
                        C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z
                        M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1
                        c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"/>
                </g>
            
            </svg>
            <CartNotification>
               {cartLength} 
            </CartNotification>
            </CartIcon>
            <Cost>
              { totalCost }&euro;
            </Cost>
          </Link>
      </Header>
      {
        categories && <MainNav data={categories} sendCategoryID={id => handleShowByCategory(id)}/>
      }
      <main style={{ width: '90%', margin: '0 auto'}}>
        <CartContext.Provider value={{
            addToCart: addToCart,
            removeOneFromCart: removeOneFromCart,
            removeFromCart: removeFromCart
          }}>
          <Routes>
              <Route path="/product/:id" exact element={<ProductDetail products={products} addToCart={(id) => addToCart(id)}
                                                          addedToCart={handleAddedToCart}
                                                          sendTotalCost={(cost) => setTotalCost(cost)}
                                                          />} /> 
              <Route path="/cart" exact element={<Cart 
                                              sendTotalCost={(cost) => setTotalCost(cost)}
                                              clearCart={() => setFilteredData([])}
                                              filteredData={filteredData} 
                                              filterData={(arr) => handleFilterData(arr)}
                                              itemRemoved={() => removeFromCart()}
                                              />} />
              <Route path="/category/:id" exact element={<Products products={selectedProducts}/>} />
              <Route path="/order-summary" exact element={<Order />} />
              <Route path="/" exact element={<Products products={products}/>} />
          </Routes>
        </CartContext.Provider>
      </main>
    </div>
  );
}

export default App;
