// import React from 'react'
import { Link } from "react-router-dom";
import "./Slid.css"
const Product2 =(props) =>{
    const {product ,showBotton} = props;
  return (
    <>
     <div className="card max-hi">
     <img src={product.image} className="card-img-top img" alt="image title"/>
    <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.price} $</p>
    {  showBotton&&  <Link className="btn btn-primary"to ={`/product/${product.id}`}>details</Link>}
{/* {  showBotton? <Link className="btn btn-primary"to ={`/product/${product.id}`}>Go</Link>:null} */}

  </div>
   </div>
    </>
  );
}

export default Product2;