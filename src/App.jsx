import React from 'react'
import { lazy } from 'react'
import { useEffect } from 'react'
import './App.css'
import { fetchData } from './utlis/api'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import NavBar from './commponents/NavBar'
import Home from './pages/home/Home'
import { Route,Routes } from 'react-router-dom'
import Explore from './pages/explore/Explore'
import useFetch from './hooks/useFetch'
//import Details from './pages/details/Details'
const LazyDetails = React.lazy(()=>import('./pages/details/Details'))
import { Suspense } from 'react'
import Loading from './commponents/Loading'
import Footer from './commponents/Footer'
import Search from './pages/searchResults/Search'
import PageNotFound from './pages/404/PageNotFound'

function App() {


  return (
    <div>
     <NavBar/>
    
     


    <Routes>

      <Route path='/' element={
        <Suspense fallback={<Loading/>}>

          <Home/>
        </Suspense>
      }/>
      <Route path='/search/:query' element={<Search/>} />
      <Route path='/trending/:mediaType/:id' element={<React.Suspense fallback={<Loading/>}>
        <LazyDetails/>
      </React.Suspense>} />
      <Route path='/popular/:mediaType/:id' element={<React.Suspense fallback={<Loading/>}>
        <LazyDetails/>
      </React.Suspense>} />
      <Route path='/top_rated/:mediaType/:id' element={<React.Suspense fallback={<Loading/>}>
        <LazyDetails/>
      </React.Suspense>} />
      <Route path='/:mediaType/:id' element={
      <React.Suspense fallback={<Loading/>}>
        <LazyDetails/>
      </React.Suspense>
      } />
      <Route path='/explore/:mediaType' element={<Explore/>}/>
      <Route path='*' element={<PageNotFound />}/>
      

    </Routes>


    <Footer/>
    </div>
  )
}

export default App
