import React,{useState} from 'react'
import useFetch from '../../hooks/useFetch'
import Carosal from '../../commponents/Carosal'

const Popular = () => {

    const [tab,setTab ] = useState("movie")
    const {data ,loading} = useFetch(`/${tab}/popular`)
   
  return (
    <div className='mt-5 md:mt-10 mx-5 md:mx-20 flex flex-col'>
        <div className='flex items-center justify-between text-xl text-red-500 mx-10 my-5'>
            <div className='text-white'>
                <h1>Popular</h1>
            </div>
            <div className='flex bg-white text-red-500 px-4 rounded-2xl py-1 gap-1 text-lg'>
                <button onClick={()=>{setTab("movie")}} className={`${tab == 'movie' ? "bg-red-500 px-2 text-white rounded-3xl" : ""}`}>Movie</button>
                <button onClick={()=>{setTab('tv')} } className={`${tab == 'tv' ? "bg-red-500 px-4 text-white rounded-3xl" : ""}`}>TV</button>
            </div>
        </div>

        <div>
        {loading ? (
            <h1>Loading</h1>
          ) : (
            

                 <Carosal data={data?.results} loading={loading} tab={`/popular/${tab}`}/>
            
          )}
        </div>
    </div>
  )
}

export default Popular