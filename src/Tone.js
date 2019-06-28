import React, { useEffect, useState } from 'react'
import Tone from 'tone'

const synths = [
  new Tone.FMSynth({
    harmonicity: 4,
    oscillator: { type: 'square' },
    envelope: { release: 1 },
  }),
  new Tone.DuoSynth(),
  new Tone.PolySynth(),
]

// synths[1].oscillator.type = 'triangle'
// synths[2].oscillator.type = 'square'
// synths[3].oscillator.type = 'sine'

const gain = new Tone.Gain(0.1)
gain.toMaster()
// const reverb = new Tone.Reverb()
// reverb.connect(gain)

synths.forEach(synth => synth.connect(gain))

const ToneTest = props => {
  const [count, setCount] = useState(0)
  const [wizard, setWizard] = useState(true)
  const { temperature, windSpeed, pressure, humidity } = props
  const notes = [temperature / 3, humidity * 1.5, pressure / 8]
  // console.log(notes)
  useEffect(() => {
    setCount(count + 1)
    console.log(count)
    if (!wizard) return null
    // wizardry(windSpeed)
  }, [pressure, humidity, temperature, windSpeed])
  // create a new sequence with the synth and notes
  // const wizardSeq = new Tone.Sequence(
  //   function(time, note) {
  //     synth.triggerAttackRelease(note, time).connect(reverb)
  //   },
  //   notes,
  //   humidity,
  // )
  const wizardry = time => {
    console.log('wizrd')
    notes.forEach((note, i) => {
      console.log(note, synths[i])
      return isFinite(note)
        ? synths[i].triggerAttackRelease(note, 10, time)
        : null
    })
  }

  // Tone.Transport.scheduleRepeat(repeat, 1)

  return (
    <>
    </>
  )
}

export default ToneTest
