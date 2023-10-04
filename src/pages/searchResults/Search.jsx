import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loading from '../../commponents/Loading'
import { useNavigate } from 'react-router-dom'
import noposter from '../../assets/no-poster.png'

const Search = () => {
    const {query} = useParams()
    const {data,loading} = useFetch(`/search/multi?query=${query}`)
    console.log(data)
    const imgurl = "https://image.tmdb.org/t/p/original";
    const navigate = useNavigate()

    if(loading) <Loading/>
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 mx-8 md:mx-32 my-10 text-white'>
    {
      data && data.results.length>0 ? data.results.map(ele=>{
        return (
          <div className='w-40 md:w-48 mb-4' onClick={()=>{navigate(`/${ele.media_type}/${ele.id}`)}}>{
            ele.poster_path ? (

                <img src={`${imgurl+ele.poster_path}`} className='h-40 md:h-60 w-full hover:scale-105 rounded-md mb-2 ' />
                ):(
                <img src={`${noposter}`} className='h-40 md:h-60 w-full hover:scale-105 rounded-md mb-2 ' />

            )
          }
            <h1>{ele.media_type == 'movie' ? ele.title : ele.name}</h1>

            </div>
        )
      }) : (
        <div className='flex flex-col items-center justify-center '>
        <h1 className='text-4xl'>Sorry..! No Data found</h1>
        <img src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1696357828~exp=1696358428~hmac=f12a48baba04f4c3b70b4e9eadb32e59e873ead455d6af0a045ab61e34a3e96e' className=''/>
        </div>

      )
    }
  </div>  )
}

export default Search