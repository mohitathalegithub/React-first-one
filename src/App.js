import React from "react"
import product from "./data";
import Lang from "./components/Lang";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App=()=>{
  return(
    <>
    
    /*{product.map((v)=>{
    {return(v.price>500)?<Lang productname={v.productname} productnumber={v.productnumber} price={v.price} discription={v.discription} image={v.image}></Lang>:null}
      
    })}
    </>
  )
}
export default App;