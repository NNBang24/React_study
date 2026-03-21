import React  from "react";

function FruitList(){
    const  fruit = ['Tao' ,'xoai' ,'Cam' ,'Nho']
    return (
        <>
            <ul>
                {
                    fruit.map((f , index) => (
                        <li key={index}>{f}</li>
                    ))
                }
            </ul>
        </>
    ) ;

}

export default FruitList