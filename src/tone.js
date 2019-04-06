import React, { useEffect } from 'react'
import Tone from 'tone'

// create a synth
const synth = new Tone.PluckSynth().toMaster()
// create an array of notes to be played

const ToneTest = props => {
  const { temperature, windSpeed, pressure, humidity } = props
  useEffect(() => {
    Tone.Transport.stop()
    Tone.Transport.start()
  }, [temperature, windSpeed, pressure, humidity])
  const notes = [200, 300, 400]
  // create a new sequence with the synth and notes
  const synthPart = new Tone.Sequence(
    function(time, note) {
      synth.triggerAttackRelease(note, time)
    },
    notes,
    `10n`,
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
