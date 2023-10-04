import React, { useState } from 'react'
import logo from'../assets/movix-logo.svg'
import { AlignJustify } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const [menuToggle,setMenuToggle] = useState(false)
    const [inputText,setInputText] = useState(false)
    const [menuItems,setMenuItems] = useState('')
    const navigate = useNavigate()

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        navigate(`/search/${inputText}`)

      }
    };
    
  return (
    <div>

   
    <div className='flex items-center justify-between  bg-slate-900 '>
        <div className='mx-10 my-2'>
          <img src={logo} alt="" />
        </div>
        <div className='mx-10 my-2'>
            <ul className='hidden md:flex items-center justify-center text-white '>
                <li className='mr-5 lg:mr-12 '>
                    <input type="text" placeholder='Search' className='w-30 lg:w-40 border-2 border-neutral-950 rounded-md text-black' 
                    onKeyDown={handleKeyDown}
                    onChange={(e)=>{setInputText(e.target.value)}}/>
                </li>
                <li className={`mr-5 lg:mr-8 cursor-pointer hover:text-red-500 ${menuItems == 'home' ? "text-red-400" : ""}`} onClick={()=>{navigate('/'),setMenuItems("home")}} >Home</li>
                <li className={`mr-5 lg:mr-8 cursor-pointer hover:text-red-500 ${menuItems == 'movie' ? "text-red-400" : ""}`} onClick={()=>{navigate(`/explore/movie`) , setMenuItems("movie")}}>Movies</li>
                <li className={` cursor-pointer hover:text-red-500 ${menuItems == 'tv' ? "text-red-400" : ""}`} onClick={()=>{navigate(`/explore/tv`) ,setMenuItems("tv")}}>TV Shows</li>
            </ul>
        </div>
        <div className='md:hidden mr-10'>
        <AlignJustify size={36} color="#f56b6b" strokeWidth={2.5} absoluteStrokeWidth onClick={()=>{setMenuToggle(!menuToggle)}} />

        
    
        </div>
    </div>
    <div className={`w-full ${menuToggle ? 'flex' : "hidden"} flex-col items-center justify-center  text-lg bg-slate-900 text-white md:hidden`}>
        <input type='text' placeholder='Search' className='rounded-md px-1 w-40 text-black' onKeyDown={handleKeyDown}/>
    <h1 className={`mt-2 ${menuItems == 'home' ? "text-red-400" : "text-white"} cursor-pointer`} onClick={()=>{navigate('/'),setMenuItems("home")}}>Home</h1>
    <h1 className= {`my-2 ${menuItems == 'movie' ? "text-red-400" : ""} cursor-pointer`} onClick={()=>{navigate(`/explore/movie`) ,setMenuItems("movie")}}>Movies</h1>
    <h1 className={`mb-2 ${menuItems == 'tv' ? "text-red-400" : ""} cursor-pointer`} onClick={()=>{navigate(`/explore/tv`) ,setMenuItems("tv")}}>TV Shows</h1>
</div>
</div>
  )
}

export default NavBar