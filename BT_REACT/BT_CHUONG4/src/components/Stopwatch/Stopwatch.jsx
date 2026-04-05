import { useRef, useState } from "react"

function Stopwatch() {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isRunning, setIsRunning] = useState(false);
    const timeRef = useRef(null) // luu Id interval
    const format = ((num) => {
        return String(num).padStart(2, "0")
    })

    const Start = () => {
        if (isRunning) return;
        setIsRunning(true);
        timeRef.current = setInterval(() => {
            setTime(pre => {
                let { hours, minutes, seconds } = pre;

                seconds++
                if (seconds === 60) {
                    seconds = 0;
                    minutes++
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours++
                }
                if (hours === 24) {
                    hours = 0
                }
                return { hours, minutes, seconds }
            })
        }, 1000)
    }
    const Stop = () => {
        clearInterval(timeRef.current)
        setIsRunning(false);

    }
    const Reset = () => {
        clearInterval(timeRef.current)
        setIsRunning(false);
        setTime({hours : 0 , minutes : 0 , seconds : 0})
    }

    return (
        <>
            <div>
                <h2>{format(time.hours)}:{format(time.minutes)}:{format(time.seconds)}</h2>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", border: "1px solid", width: "200px", height: "100px ", margin: "50px auto", padding: "5px 10px" }}>
                    <button style={{background :"green"}} onClick={Start}>Start</button>
                    <button style={{ background: "red" }} onClick={Stop}>Stop</button>
                    <button style={{ background: "yellow" }} onClick={Reset}>Reset</button>
                </div>
            </div>

        </>
    )
}

export default Stopwatch