import Root from "./components/Root";
import { WeatherProvider } from "./provider";

export default function App() {
 return (
  <WeatherProvider>
   <Root />
  </WeatherProvider>
 );
}
