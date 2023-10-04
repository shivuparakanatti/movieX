import React from 'react'
import HeroBanner from '../../commponents/HeroBanner'
import Trending from './Trending'
import Carosal from '../../commponents/Carosal'
import Popular from './Popular'
import TopRated from './TopRated'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home