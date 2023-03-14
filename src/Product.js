import{useEffect, useState} from 'react'
import Product2 from './Product2'

const Product = () => {
    const api ="https://fakestoreapi.com/products";
    const [products,setproducts] = useState([]);
    const [categories,setCategories] = useState([]);
    const  getproducts=()=>{
      fetch(api)
      .then(res=>res.json())
      .then(data=>setproducts(data));
    }
  
    const getCategories=()=>{
      fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(data=>setCategories(data));
    }
    const getpro =(catName)=>{
      fetch(`${api}/category/${catName}`)
            .then(res=>res.json())
            .then((data)=>setproducts(data));
    };
    useEffect(()=>{
      getproducts();
      getCategories();
    },[]);
  return (
    <>
    <h2 className='text-center p-3'>our product</h2>
    <div className='container'>
    <button onClick={()=>{getproducts();}} className='btn'>
          all</button> 
      {categories.map((cat)=>{
        return(<button key={cat}onClick={()=>{getpro(cat)}} className='btn'>
          {cat}</button>);
          
      })}

    <div className='row'>
        {
           products.map ((product)=>{   
            return(
                <div className='col-3 ' key={product.id}>
    
                <Product2 product={product} showBotton={true}/>
                </div>
                
            );
 
            })
            }

   

   
</div>
    </div>
    </>
  )
}

export default Product