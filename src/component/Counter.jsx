import useCounter from "../hooks/useCounter"

const Counter = () => {
    const { count, increment, decrement, ToastContainer } = useCounter()
    return <>
        <ToastContainer />
        <p>{count}</p>
        <button onClick={decrement}>-</button>

        <button onClick={increment}>+</button>
    </>
}
export default Counter  