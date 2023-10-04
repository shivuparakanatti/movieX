import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../../commponents/Loading'
import { useNavigate } from 'react-router-dom'

const Explore = () => {
    const {mediaType} = useParams()
    const {loading,data} = useFetch(`/discover/${mediaType}`)
    const imgurl = "https://image.tmdb.org/t/p/original";
    const navigate = useNavigate()


    if(loading) <Loading/>
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 mx-8 md:mx-32 my-10 text-white'>
      {
        data && data.results.map(ele=>{
          return (
            <div className='w-40 md:w-48 mb-4' onClick={()=>{navigate(`/${mediaType}/${ele.id}`)}}>
              <img src={`${imgurl+ele.poster_path}`} className='h-40 md:h-60 w-full hover:scale-105 rounded-md mb-2 ' />
              <h1>{mediaType == 'movie' ? ele.title : ele.name}</h1>

              </div>
          )
        })
      }
    </div>
  )
}

export default Explore