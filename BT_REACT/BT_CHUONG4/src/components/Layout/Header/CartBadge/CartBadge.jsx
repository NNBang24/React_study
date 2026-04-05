import { useState } from "react"
import CartContext from "../../../../context/CartContext"
import { useContext } from "react"


function CartBadge () {
    const  { cartItemCount} = useContext(CartContext)
    return (
        <>
        <div style={{ fontSize : '20px' , display : "flex" , justifyContent : "center"} }>
            Giỏ Hàng ({cartItemCount})</div>
        </>
    )
}

export default CartBadge