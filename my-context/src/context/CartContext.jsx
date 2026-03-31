import { createContext } from "react";

const CartContext = createContext({
    cartItemCount: 0 ,
    setCartItemCount: () =>{}
})
CartContext.displayName = "CartContext" ;

export default CartContext