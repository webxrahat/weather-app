import React from "react";
import AddToFavorite from "./AddToFavorite";
import WeatherHeadline from "./WeatherHeadline";
import WeatherCondition from "./WeatherCondition";
import { useWeather } from "../../hooks";

export default function WeatherBoard() {
 const { weatherData, error, loading } = useWeather();
 console.log(weatherData, error, loading);

 return (
  <main>
   {" "}
   <section className="">
    <div className="container">
     <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
       <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
         <AddToFavorite />
        </div>
       </div>
       <WeatherHeadline />
       <WeatherCondition />
      </div>
     </div>
    </div>
   </section>
  </main>
 );
}
