import { useState } from "react";

const CartBtn = ()=>{
    let [btnText,setBtnText] = useState("add to Cart");
    let updateBtn = ()=> setBtnText("Go To Cart")
    return (
        <button onClick={updateBtn}>{btnText}</button>
        

    )
}

export default CartBtn;