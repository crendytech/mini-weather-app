
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { WeatherDashboard } from "./components/weather-dashboard/weather-dashboard"

const App = () => {
  return (
    <Provider store={store}>
      <WeatherDashboard />
    </Provider>
  )
}

export default App
