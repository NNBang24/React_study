import {React , createContext} from "react";

const CartContext = createContext({
    cartItemCount : 0 ,
    setCartItemCount : () =>{}
}) ;

export default CartContext ;