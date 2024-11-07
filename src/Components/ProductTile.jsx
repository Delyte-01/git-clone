import React from 'react'
import { useNavigate } from 'react-router-dom';



function ProductTile({data}) {
    const navigate = useNavigate();
    function handleNavigateToDetailsPage(getCurrentId){
        console.log(getCurrentId, navigate)
        navigate(`/products/${getCurrentId}`)
    }
  return (
    <div>
        <h1>{data?.title}</h1>
       <p>{data?.heading}</p>
        <button onClick={()=>handleNavigateToDetailsPage(data?.id)}>check status</button>
    </div>
  )
}

export default ProductTile