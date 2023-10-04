import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

import React, { useEffect, useState } from "react";

const Carosal = (item) => {
  const navigate = useNavigate()
  const { data, loading ,tab} = item;
  const [items, setItems] = useState([]);
  const imgurl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    setItems(data);
  }, [data]);

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

  if (loading) <Loading/>;
  return (
    <div>
      <Carousel
        responsive={responsive}
        customTransition="all .5"
        transitionDuration={500}
      >
        {items &&
          items.map((ele) => {
            return (
              <div
                onClick={() => {
                  navigate(`${tab}/${ele.id}`);
                }}
                className="mx-4 w-24 md:w-40 "
              >
                <img
                  src={`${imgurl + ele.poster_path}`}
                  className=" w-full h-24 rounded-lg hover:scale-110 cursor-pointer "
                  alt=""
                  loading="lazy"
                />
                <h1 className="text-red-400 h-7 overflow-hidden my-2 ">
                  {ele.title}
                </h1>
              </div>
            )
          })}
      </Carousel>
      
    </div>
  );
};

export default Carosal;
