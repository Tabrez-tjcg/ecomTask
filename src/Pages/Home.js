import React, { useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard'

import Api from '../Api/Api'
import SearchBox from '../Components/SearchBox';
import SortingProducts from '../Components/SortingProducts';

const Home = () => {

    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const res = await Api.get('/products');
        const ProducstData = res.data;
        console.log(res.data)
        setProducts(ProducstData)
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    

  return (
        <div>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <div style={{maxWidth: '100%'}}>
                    <SearchBox />
                </div>
                <SortingProducts />
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center'}}>
                {console.log(products)}
                    {products.map(product => {
                        return <ProductCard 
                        key={product._id}
                        name={product.name} 
                        brand={product.brand}
                        image={product.image} 
                        price={product.price} 
                        rating={product.rating}
                        numReviews={product.numReviews}/> 
                    })}
            </div>
        </div>
  )
}

export default Home