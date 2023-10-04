import React from "react";
import useFetch from "../hooks/useFetch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import Noposter from '../assets/no-poster.png'

const Recomndation = (Data) => {
  const { mediaType, id } = Data;
  const imgurl = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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

  if (loading) <h1>loading...</h1>;
  return (
    <div>
      {data.results && (
        <Carousel
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
        >
          {data.results?.map((ele) => {
            return (
              <div
                onClick={() => {
                  navigate(`/${mediaType}/${ele.id}`);
                }}
                className="mx-4 w-24 md:w-40 "
              >
                {
                  ele.poster_path ? (

                    <img
                      src={`${imgurl + ele.poster_path}`}
                      className=" w-full h-24 rounded-lg hover:scale-110 cursor-pointer "
                      alt=""
                    />
                  ):(
                    <img
                      src={`${Noposter}`}
                      className=" w-full h-24 rounded-lg hover:scale-110 cursor-pointer "
                      alt=""
                    />
                  )
                }
                <h1 className="text-red-400 h-7 overflow-hidden my-2 ">
                  {ele.title}
                </h1>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Recomndation;
