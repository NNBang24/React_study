import React from "react";
import shirt1 from '../../Images/t_shirt1.jpeg'
import './ProductCard.css'
function ProductCard({name , price , image}) {
    return (
        <>

            <div className="div-card">
                <div className="imageWrapper">
                    <img src={image} alt={name} />
                    <div className="overlay"></div>
                </div>
                <h3>{name}</h3>
                <p>{price}</p>
                <button className="btn-add-cart">add to cart</button>
            </div>
        </>
    )
}
export default ProductCard