import React, { useEffect } from 'react'
import Tone from 'tone'

const synth = new Tone.PluckSynth().toMaster()

const ToneTest = props => {
  const { temperature, windSpeed, pressure, humidity } = props
  useEffect(() => {
    Tone.Transport.stop()
    Tone.Transport.start()
  }, [temperature, windSpeed, pressure, humidity])
  const notes = [
    isFinite(temperature) ? temperature : null,
    isFinite(humidity) ? humidity : null,
    isFinite(pressure) ? pressure / 2.5 : null,
  ]
  // create a new sequence with the synth and notes
  const synthPart = new Tone.Sequence(
    function(time, note) {
      synth.triggerAttackRelease(note, time)
    },
    notes,
    windSpeed,
  )
  synthPart.start()
  return (
    <>
      <button onClick={() => Tone.Transport.start()}>Activate</button>

      <button onClick={() => Tone.Transport.stop()}>Stop</button>
    </>
  )
}

export default ToneTest
