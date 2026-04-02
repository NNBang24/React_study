import React  from "react";
import tShirt1 from '../../Images/t_shirt1.jpeg'
import tShirt2 from '../../Images/t_shirt2.jpeg'
import tShirt3 from '../../Images/t_shirt3.jpeg'
import tShirt4 from '../../Images/t_shirt8.jpeg'
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.css'
function ProductList () {
    const productsList = [
        {
            id: 1,
            name: "T SHIRT 1",
            img: tShirt1,
            price: "230.000",
        },
        {
            id: 2,
            name: "T SHIRT 2",
            img: tShirt2,
            price: "230.000",
        },
        {
            id: 3,
            name: "T SHIRT 3",
            img: tShirt3,
            price: "240.000",
        },
        {
            id: 4,
            name: "T SHIRT 4",
            img: tShirt4,
            price: "230.000",
        },
    ]
    return (
        <>
            <div className="div-Product-List">
                {
                    productsList.map(product => (
                        <ProductCard key={product.id} name={product.name}  price={product.price} image={product.img} />
                    ))
                }
            </div>
        </>
    )
}

export default ProductList