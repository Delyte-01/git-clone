import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingContext } from './Context';
import Filter from './Filter';

function ProductDetails() {
    const { id } =useParams();
    const navigate =useNavigate();
    const {tile,setTile} =useContext(ShoppingContext);
    
   
// const  API_URL ="http://localhost:3500/items";
const  API_URL ="https://delyte-01.github.io/fake_api/db.json";
  async function fetchProductDetails(){
    const apiResponse =await fetch(`${API_URL}/${id}`);
    const result = await apiResponse.json();
    console.log(result)
    if(result) setTile(result);
    }
 useEffect(()=>{
    fetchProductDetails();
   },[id]);
   function handleClick(){
   navigate('/products');
   }

 console.log(tile)
  return (
    <div>
  <h1>{tile?.title}</h1>
  <button onClick={handleClick}>back</button>
  <header>
    <h1>just for you</h1>
    <div>
        <Filter tile={tile}  />
    </div>
  </header>
</div>
  )
}

export default ProductDetails