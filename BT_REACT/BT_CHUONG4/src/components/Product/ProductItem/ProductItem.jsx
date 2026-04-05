import { useContext, useState } from "react"
import CartContext from "../../../context/CartContext"
import './ProductList.css'
function ProductItem() {
    const productList = [
        { id: 1, name: "Áo", price: 100 },
        { id: 2, name: "Quần", price: 200 },
        { id: 3, name: "Giày", price: 300 }
    ]
    const { setCartItemCount } = useContext(CartContext)
    const addToCart = () => {
        setCartItemCount((oldValue) => {
            return oldValue + 1
        })

    }
    return (
        <>
            <div>
                <h2>Danh sách sản phẩm</h2>
                <div className="container-product">
                    {
                        productList.map(product => (
                            <div key={product.id}>
                                <h4>Tên : {product.name}</h4>
                                <p> Giá : {product.price}</p>
                                <button onClick={addToCart}>Thêm vào giỏ hàng</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductItem