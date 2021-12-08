import ProductItem from "../../components/productItem/productItem"

const Products = ({products}) => {
   


    return (
        <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            { products && products.map((item, i) => (
              <ProductItem 
                key={i}
                product={item}
              />
              )) }
          </main>
    )
}

export default Products