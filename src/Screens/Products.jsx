import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../Data';

const Products = () => {
    const {id} = useParams()
    console.log(id);
    const filterData = productData[0].filter((e,i)=>(
        e.id == id
    ))
    console.log(filterData);
  return (
    <div>
        {
            filterData.map((e,i)=>{
return(
    <div style={{
        border:"1px solid black",
        width:"400px",
        textAlign:"center",
        marginTop:"25px",
        borderRadius:"5px",
        height:"100%",
        borderBottom:"no",
        margin:"auto"
    }} key={i}>
        <img height={300} src={e.image} alt="" />
        <h2>{e.title}</h2>
        <p>{e.description}</p>
        <h4>{e.price}</h4>
    </div>
)
            })
        }

    </div>
  )
}

export default Products