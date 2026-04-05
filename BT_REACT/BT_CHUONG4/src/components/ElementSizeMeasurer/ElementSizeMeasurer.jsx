import { useRef, useState } from "react"

function ElementSizeMeasurer() {
    const divRef = useRef(null) ;
    const [size , setSize] = useState({width : 0 ,height : 0}) ;
    const handleMeasurer = () => {
        const element = divRef.current ;
        if(element) {
            const width = element.offsetWidth ;
            const height = element.offsetHeight ;
            setSize({width , height})
        }

    }
    return (
        <>
            <div>
                <div
                    ref={divRef}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        width: "300px"
                    }}
                >
                    Đây là một đoạn văn bản ví dụ. Kích thước của khung chứa này sẽ được đo.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </div>

                <button onClick={handleMeasurer}>
                    Đo kích thước
                </button>

                <p>
                    Chiều rộng: {size.width}px, Chiều cao: {size.height}px
                </p>
            </div>
        </>
    )
}

export default ElementSizeMeasurer