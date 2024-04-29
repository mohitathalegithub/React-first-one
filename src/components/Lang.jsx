import React from "react";
const Lang=(props)=>{
    return (

        <div>
            product name<h1 className="text-primary">{props.productname}</h1>
            product number <h4>{props.productnumber}</h4>
            product price<h1>{props.price}</h1>
            discriptionnnn<h4>{props.discription}</h4>
            <img src={props.image} alt="" height="100px" width="100px"></img>
        </div>
        

    )
}
export default Lang;