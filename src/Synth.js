import React, { useEffect } from 'react'
import Tone from 'tone'

const Synth = props => {
  const { pressure, humidity, temperature, windSpeed } = props

  const randomFreq = () => {
    Math.floor(Math.random() * (Math.ceil(600) - Math.floor(1) + Math.floor(1)))
  }

  useEffect(() => {
    console.log('new windspeed')
  }, [windSpeed])

  return (
    <div>
      {pressure && <p>Pressure: {pressure}</p>}
      {humidity && <p>Humidity: {humidity}</p>}
      {temperature && <p>Temperature: {temperature}</p>}
      {windSpeed && <p>Wind Speed: {windSpeed}</p>}
    </div>
  )
}

export default Synth
