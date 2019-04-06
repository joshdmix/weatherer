import React, { useEffect, useState } from 'react'
import Synth from './Synth'
import Tone from './tone'

const App = () => {
  const key = '749c84e5257c5b61d9d58d6cf12fca84'
  const [temperature, setTemperature] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [humidity, setHumidity] = useState()
  const [description, setDescription] = useState()
  const [coord, setCoord] = useState()
  const [clouds, setClouds] = useState()
  const [pressure, setPressure] = useState()
  const [windSpeed, setWindSpeed] = useState()
  const [windDirection, setWindDirection] = useState()

  useEffect(() => setInterval(() => getWeather(), 3000), [])

  const getWeather = async () => {
    console.log('request')
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=40243,us&appid=${key}`,
    )
    const response = await api_call.json()
    setTemperature(response.main.temp)
    setCity(response.name)
    setCountry(response.sys.country)
    setHumidity(response.main.humidity)
    setPressure(response.main.pressure)
    setDescription(response.weather[0].description)
    setCoord(response.coord)
    setClouds(response.clouds)
    setWindSpeed(response.wind.speed)
    setWindDirection(response.wind.deg)
  }

  return (
    <div>
      <h1>weatherer</h1>
      <Tone
        temperature={temperature}
        windSpeed={windSpeed}
        pressure={pressure}
        humidity={humidity}
      />
      <Synth
        temperature={temperature}
        humidity={humidity}
        pressure={pressure}
        windSpeed={windSpeed}
      />
    </div>
  )
}

export default App
