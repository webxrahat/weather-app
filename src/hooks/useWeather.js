import { useEffect, useState } from "react";

export default function useWeather() {
 const [weatherData, setWeatherData] = useState({
  location: "",
  climate: "",
  temperature: "",
  maxTemperature: "",
  minTemperature: "",
  humidity: "",
  cloudPercentage: "",
  wind: "",
  time: "",
  longitude: "",
  latitude: "",
 });

 const [loading, setLoading] = useState({
  state: false,
  message: "",
 });

 const [error, setError] = useState(null);

 const fetchData = async (latitude, longitude) => {
  try {
   setLoading({
    ...loading,
    state: true,
    message: "Fetching weather Data",
   });

   const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
     import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`
   );

   if (!res.ok) {
    throw new Error(res.status);
   }

   const data = await res.json();

   const updateWeatherData = {
    ...weatherData,
    location: data?.name,
    climate: data?.weather[0]?.main,
    temperature: data?.main?.temp,
    maxTemperature: data?.main?.temp_max,
    minTemperature: data?.main?.temp_min,
    humidity: data?.main?.humidity,
    cloudPercentage: data?.clouds?.all,
    wind: data?.wind?.speed,
    time: data?.dt,
    longitude: longitude,
    latitude: latitude,
   };

   setWeatherData(updateWeatherData);
  } catch (error) {
   setError(error);
  } finally {
   setLoading({
    ...loading,
    state: false,
    message: "Fetching weather Data",
   });
  }
 };

 useEffect(() => {
  setLoading({
   state: true,
   message: "Finding location ....",
  });

  navigator.geolocation.getCurrentPosition((position) =>
   fetchData(position.coords.latitude, position.coords.longitude)
  );
 }, []);

 return {
  weatherData,
  error,
  loading,
 };
}
