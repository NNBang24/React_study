import React from "react";
import "../css/Product.css"
const ProductListComponent = (({ product }) => {
    return (
        <>
            {/* <h1 className="h1">SHOPPING NNB</h1> */}
            <div className="product-grid">
                {product.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="product-image">
                            <img src={item.img} alt={`${item.name} product`} />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{item.name}</h3>
                            <p className="product-price">{item.price}</p>
                            <p className="product-desc">{item.desc}</p>
                            <button className="btn-add">add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
})
export default ProductListComponent