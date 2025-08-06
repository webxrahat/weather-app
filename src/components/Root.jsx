import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";

export default function Root() {
 return (
  <div className=" h-screen grid  place-items-center">
   <Header />

   <WeatherBoard />
  </div>
 );
}
