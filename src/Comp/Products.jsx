import {useEffect,useState} from 'react';
import "./Products.css"
import axios from "axios"

function Products() {
    const [item,setItems] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").
        then((res)=>{
            console.log(res.data);
            setItems(res.data)
        })
    },[])
    return (
        <div className='products'>
           {item.map((ele)=>{
            return <div className='items'>
              <img src={ele.image} alt='' height="100px" width="100px"/>
              <p>{ele.title}</p>
              <p>$ : {ele.price} </p>
              <button onClick={()=>{alert("PRODUCT ADDED")}}>ADD TO CART</button>
            </div>
           })}
        </div>
    );
}

export default Products;