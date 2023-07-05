import {useEffect,useState} from 'react';
import axios from "axios"

function Home() {
    const [items,setItems] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").
        then((res)=>{
            console.log(res.data);
            setItems(res.data)
        })
    },[])
    return (
       <>
        <div>
            <h2>WELCOME TO G-MALL</h2>
            <div style={{display:"flex",flexWrap:"wrap",marginLeft:"50px"}}>
                {items.map((ele)=>{
                    return(<div style={{width:"20%",height:"40vh",margin:"10px auto"}}>
                        <img src={ele.image} alt='' height="160px" width="150px"/>
                        <p>{ele.category}</p>
                    </div>)
                })}
            </div>
        </div>
       </>
    );
}

export default Home;