import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";


function CartIcon () {
    const {cartItemCount} = useContext(CartContext) ;
    return (
        <div>
            Cart ({cartItemCount})
        </div>
    )
}

export default CartIcon