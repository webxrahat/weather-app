import { weatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
 const { weatherData, error, loading } = useWeather();
 return (
  <weatherContext.Provider value={{ weatherData, error, loading }}>
   {children}
  </weatherContext.Provider>
 );
};

export default WeatherProvider;
