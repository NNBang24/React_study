import React from "react";
import CartContext from "../context/CartContext";

function AddToCartButton() {

    return (
        <CartContext.Consumer>

            {
                ({ cartItemCount, setCartItemCount }) => (
                    <button onClick={() => setCartItemCount((pre) => {
                       return  pre + 1
                    })}>
                        Add to Cart 
                    </button>
                )
            }
        </CartContext.Consumer>
    )
}

export default AddToCartButton;