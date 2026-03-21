import React ,{useEffect, useState}from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function Counter(props) {
    const [count , setCount] = useState(props.startCount) ;
    const handleIncrement =() => {
        setCount((prevCount) => {
            return prevCount + 1
        })
    }
    const handleGiam = () => {
        setCount(count -1)
    }
    useEffect(() => {
        console.log("useEffect running") ;
        document.title = `Count: ${count}`
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <p style={{color:"red" , fontSize : "20px" , }}>count : {count}</p>
            <button onClick={handleIncrement} style={{marginRight : '10px'}} >tang</button>
            <button onClick={handleGiam}>giam</button>
        </div>
    )
}

export default Counter ;