import React from 'react'
import Tone from 'tone'

// create a synth
const synth = new Tone.PluckSynth().toMaster()
// create an array of notes to be played

const ToneTest = props => {
  const { temperature, windSpeed, pressure, humidity } = props
  console.log(temperature)
  const notes = [
    Math.floor(temperature),
    Math.floor(windSpeed * 100),
    pressure / 2,
    humidity + 200,
  ]
  // create a new sequence with the synth and notes
  const synthPart = new Tone.Sequence(
    function(time, note) {
      synth.triggerAttackRelease(note, time)
      console.log(time)
    },
    notes,
    `1n`,
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
