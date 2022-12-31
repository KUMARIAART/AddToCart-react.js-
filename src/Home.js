import React, { useState,useEffect} from "react";
function Home() {
    const [Data, setData] = useState([]);
    useEffect(()=>{
        let data = async () => {
            let response = await fetch('https://fakestoreapi.com/products')
            let result = await response.json()
            setData(result)
        }
        data()
    },[])
    return (
        <div>
            {
             Data.map((item)=>{
                return(
                <div id='box2'>
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                    <img src={item.image} />
                    <p>{item.description}</p>
                    <button>{item.price}</button>
                    <button onClick={()=>{
                    }}>Add Cart</button>
                </div>
                )
            })
        }
        </div>
    )
}
export default Home;