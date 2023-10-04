import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carosal from "../../commponents/Carosal";
import { Suspense } from "react";
import Loading from "../../commponents/Loading";
const Trending = () => {

  const [tab, setTab] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${tab}`);

 // console.log(data, loading);

  const [res, setRes] = useState([]);

  const navigate = useNavigate();

  const { url } = useSelector((state) => {
    return state.home;
  });

  //const items = ["item1","item2","item3","ite4"]

  const imgurl = "https://image.tmdb.org/t/p/original";


  return (
    <div className="mt-5 md:mt-10 mx-5 md:mx-20 flex flex-col">
      <div>
        <div className="flex items-center justify-between text-xl text-red-500 mx-10 my-5">
          <h1 className=" rounded-xl text-white">Trending</h1>
          <div className="bg-white rounded-2xl py-1 px-2 md:px-4 ">
            <button
              onClick={() => {
                setTab("day");
              }}
              className={` text-lg px-2 ${
                tab == "day" ? "bg-red-500 text-white rounded-2xl" : ""
              }`}
            >
              Day
            </button>
            <button
              onClick={() => {
                setTab("week");
              }}
              className={` text-lg px-2 ${
                tab == "week" ? "bg-red-500 text-white rounded-2xl" : ""
              }`}
            >
              Week
            </button>
          </div>
        </div>
        <div>
          {loading ? (
            <h1><Loading/></h1>
          ) : (
            

                 <Carosal data={data?.results} loading={loading} tab={`/trending/movie`}/>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
