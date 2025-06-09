import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const useCounter = () => {
    const [count, setCount] = useState(0)
    const notify = (msg) => toast(msg);
    const increment = () => {
        if (count < 8) {
            setCount(count + 1)
        }
        else{
            notify("Max count is 8")
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        else{
            notify(" Min count is 0")
        }
    }
    return {count, increment, decrement, ToastContainer}
}
export default useCounter