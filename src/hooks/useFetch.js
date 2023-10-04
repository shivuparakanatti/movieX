import React,{useState, useEffect} from 'react'
import { fetchData } from '../utlis/api'

const useFetch = (url) => {
    const [data,setData] = useState('')
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetchData(url)
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
        .catch(err=>{
            console.log(err)
        })


    },[url])

    return {data,loading}
  

}

export default useFetch