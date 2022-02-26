import {useState} from "react"

const useFatching = (callback) => {
    const [isPostLoading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const fatching = async (...args) =>{
        try{
            setLoading(true)
            await callback(...args)
        }
        catch(e) {
            setError(e.massege)
        }
        finally{
            setLoading(false)
        }
    }

    return [fatching, isPostLoading, error]
}

export default useFatching