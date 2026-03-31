import '../css/Count.css'
import React ,{useState} from 'react'
function CountComponent({ }) {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount((pre) => {
            return pre + 1 ;
        })
    }
    const handleDecrease = () => {
        setCount((pre) => {
            return pre - 1 ;
        })
    }
    return (
        <>
            <div className="count-container">
                <h2>Máy đếm NNB</h2>
                <div className="count-display">
                    <p className={count >= 0 ? 'number positive' : 'number negative'}>{count}</p>
                </div>
                <div className="count-controls">
                    <button className="button-increase" onClick={handleIncrease}>Tăng</button>
                    <button className="button-decrease" onClick={handleDecrease}>Giảm</button>
                </div>
            </div>
        </>
    )
}
export default CountComponent