import React, { useEffect } from 'react'
import Tone from 'tone'

const synth = new Tone.DuoSynth().toMaster()

const ToneTest = props => {
  const { temperature, windSpeed, pressure, humidity } = props
  useEffect(() => {
    Tone.Transport.start()
  }, [temperature, windSpeed, pressure, humidity])
  const notes = [
    isFinite(temperature) ? temperature / 2 : null,
    isFinite(humidity) ? humidity : null,
    isFinite(pressure) ? pressure / 4 : null,
  ]
  console.log('P:', pressure / 4)
  console.log('T:', temperature / 2)
  console.log('H:', humidity)
  // create a new sequence with the synth and notes
  const synthPart = new Tone.Sequence(
    function(time, note) {
      synth.triggerAttackRelease(note, time)
    },
    notes,
    humidity,
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
