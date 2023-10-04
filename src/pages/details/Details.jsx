import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CastCarousal from "../../commponents/CastCarousal";
import VideoSection from "../../commponents/VideoSection";
import ReactPlayer from 'react-player';
import { XCircle } from 'lucide-react';
import Recomndation from "../../commponents/Recomndation";
import { Suspense } from "react";
import Loading from "../../commponents/Loading";
import Noposter from '../../assets/no-poster.png'

const Details = () => {
  const { id, mediaType } = useParams();

  const [videoPopup,setVideoPopup] = useState(false)
  const [selectedVideo,setSelectedVideo] = useState(null)

  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: credits, loading: creditLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  const { data: videos, loading: videosLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const imgurl = "https://image.tmdb.org/t/p/original";

  const timeCoonverter = t=>{
    const h = Math.floor(t/60)
    const m = t-(h*60)
    return `${h}h ${m}m`
  }


  const moviePlay = videos.results?.find(ele=>{
    return ele.type=="Trailer"
  })
 

  if (loading) <h1>Loading...</h1>;

  return (
    <Suspense fallback={<h1>{Loading}</h1>}>
       <div className="text-white mx-8 md:mx-20 lg:mx-36 my-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
        <div>
          <Suspense fallback={Loading}>
            {
              data.poster_path ? (

                <img src={`${imgurl}${data.poster_path}`} className="h-96 w-96"/>
                ):(
                    
                    <img src={`${Noposter}`} className="h-96 w-96"/>
                  

              )
            }

          </Suspense>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl">{data.original_title}</h1>
          <h2 className="text-sm">{data.tagline}</h2>
          <div className="flex flex-row gap-4 items-center justify-start " onClick={()=>{
            setVideoPopup(true)
            setSelectedVideo('https://www.youtube.com/watch?v=wKajpIyy_yA')
            }}> 
            <h2 className="bg-black w-14  h-14 flex rounded-full items-center justify-center border-4 border-green-900" >{Math.round(data.vote_average) }</h2>
            <VideoSection videoPopup={videoPopup} onClick={()=>{
            setVideoPopup(true)
            setSelectedVideo('https://www.youtube.com/watch?v=wKajpIyy_yA')
            }}/>
            <h1 className="hover:text-red-500" onClick={()=>{
            setVideoPopup(true)
            setSelectedVideo('https://www.youtube.com/watch?v=wKajpIyy_yA')
            
            }}>Watch Trailer</h1>
          </div>
          <div>
            <h2 className="text-3xl mb-1">Overview</h2>
            <p className="text-sm">{data.overview}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-start items-start md:items-center gap-2 md:gap-10">
            <h2 className="text-xl ">Status : <span className="text-sm font-light text-slate-200 ">{data.status}</span></h2>
            <h2 className="text-xl ">
              Release Date : <span className="text-sm font-light text-slate-200 ">{data.release_date}</span>
            </h2>
            <h2 className="text-xl ">Run Time : <span className="text-sm font-light text-slate-200 ">{timeCoonverter( data.runtime)}</span></h2>
          </div>
        </div>
      </div>
      <div className="mt-10 "> 
        <h1 className="mb-5 text-xl">Top Cast</h1>
        <CastCarousal data={credits?.cast}/>
      </div>

      <div className={`  ${videoPopup ? "absolute" : "block"} top-[35%] left-[35%]`}>
        <div className="absolute -top-2 -right-2"> {
          videoPopup ? <XCircle size={36} color="#eee8e8" strokeWidth={2.5} absoluteStrokeWidth onClick={()=>{
            setSelectedVideo(null)
            setVideoPopup(false)
            }} />: ""
        }</div>
          {
            selectedVideo && <ReactPlayer
            url={`https://www.youtube.com/watch?v=Zbl1S06yixA`}
            controls={true}  // Show native player controls
            width='50vh'
                height='30vh'
                className="overflow-hidden"
          />
          }
      

      </div>
      <div className="mt-10">
        <h1 className="mb-5 text-xl">Similar {mediaType}s</h1>
        <Recomndation mediaType={mediaType} id={id}/>
        
      </div>
    </div>

    </Suspense>
   
  );
};

export default Details;
