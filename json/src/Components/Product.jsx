import React, { useContext } from 'react'
import { ShoppingContext } from './Context'
import { useNavigate } from 'react-router-dom';
import ProductTile from './ProductTile';

function Product() {
    const {listOfProducts} = useContext(ShoppingContext);
    console.log(listOfProducts)
   
  return (
    <div>
     {
        listOfProducts.map((data)=> 
            <ProductTile data={data} />
    )
     }
    </div>
  )
}

export default Product