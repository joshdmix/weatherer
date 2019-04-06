import React from 'react'

const Synth = props => {
  const { pressure, humidity, temperature, windSpeed } = props

  return (
    <div>
      <p>Pressure: {pressure}</p>
      <p>Humidity: {humidity}</p>
      <p>Temperature: {temperature}</p>
      <p>Wind Speed: {windSpeed}</p>
    </div>
  )
}

export default Synth
