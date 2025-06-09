import { useEffect, useState } from "react"

const useFetch = ({url}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const getData = await fetch(url)
                const jsonData = await getData.json()
                setData(jsonData)
                setLoading(false)
            } catch (e) {
                setError(e.msg)
                setLoading(false)
            }

        }
        fetchData()
    }, [])

    console.log(data,"data from hook")

    return { data, loading, error }

}
export default useFetch