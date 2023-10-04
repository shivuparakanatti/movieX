import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const HeroBanner = () => {
  const [inputText, setInputText] = useState()
 // const [searchRes, setSearchRes] = useState(null)

  const navigate = useNavigate()

  const handleSearch=()=>{
    //console.log(inputText)
    navigate(`/search/${inputText}`)
  }
  return (
    <div className="h-[60vh] w-screen flex justify-center items-center relative ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0 "
      style={{
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/510/951/HD-wallpaper-batman-the-batman-dc-comics-the-batman-movie.jpg')`, // Replace with your image path
      }}
    ></div>

    {/* Input Field */}
    <div className="z-10    rounded-md shadow-md flex flex-col items-center justify-center">
      <h1 className='flex items-center justify-center text-6xl text-white mb-4'>Welcome</h1>
      <p className='flex items-center justify-center text-xl text-white mb-2 mx-12 md:mx-0'>Millions of Movies, TV Shows and people to discover. Explore NOW</p>
      <div>

      <input
        type="text"
        className="sm:w-64  md:w-80  lg:w-96 h-10 border rounded-l-xl overflow-hidden"
        placeholder="Search for Movie or TV Show..."
        onChange={(e)=>{setInputText(e.target.value)}}
      />
      <button className='sm:w-16 lg:w-24 h-10 bg-red-500 rounded-r-xl' onClick={handleSearch}>Search</button>
      </div>
    </div>
  </div>
  )
}

export default HeroBanner