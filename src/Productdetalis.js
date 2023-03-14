import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product2 from './Product2';
const Productdetalis = () => {
    const api1  ="https://fakestoreapi.com/products"
    const [product,setproduct]=useState([]);
    const params = useParams();
    console.log(params);
    useEffect(() => {
        fetch(`${api1}/${params.productId}`)
        .then(res=>res.json())
        .then(product=>(setproduct(product)))
    }, []);
  return (
    // {  products.length===0?( <h1 className='loder'><BeatLoader color="#36d7b7" /></h1>) :(<div>{prodata}</div>)}</div>
        
        <Product2 product={product} showBotton={false}/>
  )
}

export default Productdetalis