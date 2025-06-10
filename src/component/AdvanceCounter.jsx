import { useEffect, useState } from "react"

const AdvanceCounter = () => {
    const [count, setCount] = useState(0)
    const [isCount,setIsCount] = useState(false)

    useEffect(() => {
        let interval
        if(count<10 && isCount){
             interval = setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000)
        }else{
            setIsCount(false)
        }
       
        return ()=>clearInterval(interval)
    }, [isCount, count])

    return <>
        <p>{count}</p>
        <button onClick={()=>setIsCount(true)} disabled={isCount || count===10}>Start</button>
        <button onClick={()=>setIsCount(false)} disabled={!isCount}>Pause</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </>
}
export default AdvanceCounter