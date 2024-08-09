import React from 'react'
import { productData } from '../Data'
import Cards from '../Component/Cards'

const Home = () => {
  return (
    <div><h1>Home</h1>
    
    {
        productData[0].map((e,i)=>{
            return(
              <div style={{
                display:"inline-block",
              margin:"10px"
                

              }} key={i}>
                  <Cards
                title={e.title}
                img={e.image}
                des={e.description}
                id={e.id}
                
                />
              </div>
            )
        })
    }
    </div>
  )
}

export default Home