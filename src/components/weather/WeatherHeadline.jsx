import React, { useContext } from "react";
import { weatherContext } from "../../context";
import getFormattedData from "../../utils/date-util";
import RainIcon from "../../../public/rainy.svg";
import CloudIcon from "../../../public/cloud.svg";
import SnowIcon from "../../../public/rainy.svg";
import ThunderIcon from "../../../public/thunder.svg";
import SunnyIcon from "../../../public/sun.svg";
import HazeIcon from "../../../public/haze.svg";

export default function WeatherHeadline() {
 const { weatherData } = useContext(weatherContext);

 const { climate, temperature, location, time } = weatherData || {};
 console.log("weatherData", weatherData);

 function getWeatherIcon(climate) {
  switch (climate) {
   case "Rain":
    return RainIcon;
   case "Clouds":
    return CloudIcon;
   case "Snow":
    return SnowIcon;
   case "Thunder":
    return ThunderIcon;
   case "Clear":
    return SunnyIcon;
   case "Fog":
    return HazeIcon;
   case "Haze":
    return HazeIcon;
   default:
    return SunnyIcon;
  }
 }

 return (
  <div>
   <div className="max-md:flex items-center justify-between md:-mt-10">
    <img src={getWeatherIcon(climate)} alt="cloud" />
    <div className="max-md:flex items-center max-md:space-x-4">
     <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
      {Math.round(temperature)}°
     </h1>
     <div className="flex items-center space-x-4 md:mb-4">
      <img src="/pin.svg" />
      <h2 className="text-2xl lg:text-[50px]">{location}</h2>
     </div>
    </div>
   </div>
   <p className="text-sm lg:text-lg">
    {" "}
    {getFormattedData(time, "time", false)} -{" "}
    {getFormattedData(time, "date", false)}
   </p>
  </div>
 );
}
