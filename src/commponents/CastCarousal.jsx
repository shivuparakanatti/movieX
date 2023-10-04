import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from './Loading';
import avatar from '../assets/avatar.png'

const CastCarousal = (item) => {
    const imgurl = "https://image.tmdb.org/t/p/original";

    const {data} = item
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
        },
      };
  return (
<div>
    {
        data ? (
            <Carousel
            responsive={responsive}
            customTransition="all .5"
            transitionDuration={500}
          >
            {data &&
              data.map((ele) => {
                return (
                    <div className='w-20 overflow-hidden h-32 hover:w-28'>
                      {
                        ele.profile_path ? (

                          <img src={`${imgurl}${ele.profile_path}`} className='h-20 w-20 rounded-full'/>
                          ):(
                          <img src={avatar} className='h-20 w-20 rounded-full'/>
                        )
                      }
                    <h1>{ele.name}</h1>
                    <h1 className='text-xs'>as <span className='text-sm'>{ele.character}</span></h1>
                    </div>
                )
              })}
          </Carousel>
        ) :<Loading/>
    }
     
      
    </div>  )
}

export default CastCarousal