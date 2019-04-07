import React, { useEffect } from 'react'
import Tone from 'tone'

const synths = [new Tone.Synth(), new Tone.DuoSynth(), new Tone.PolySynth()]

// synths[1].oscillator.type = 'triangle'
// synths[2].oscillator.type = 'square'
// synths[3].oscillator.type = 'sine'

const gain = new Tone.Gain(0.1)
gain.toMaster()
const reverb = new Tone.Reverb()
reverb.connect(gain)

synths.forEach(synth => synth.connect(gain))

const ToneTest = props => {
  const { temperature, windSpeed, pressure, humidity } = props
  useEffect(() => {
    Tone.Transport.stop()
    Tone.Transport.start()
    console.log('updated')
  }, [temperature, pressure, humidity])
  const notes = [temperature / 2, humidity * 4, pressure / 4]
  console.log('P:', pressure / 4)
  console.log('T:', temperature / 2)
  console.log('H:', humidity)
  // create a new sequence with the synth and notes
  // const synthPart = new Tone.Sequence(
  //   function(time, note) {
  //     synth.triggerAttackRelease(note, time).connect(reverb)
  //   },
  //   notes,
  //   humidity,
  // )
  // synthPart.start()
  const repeat = time => {
    notes.forEach((note, i) => {
      // console.log(note, synths[i])
      return isFinite(note)
        ? synths[i].triggerAttackRelease(note, 100, time)
        : null
    })
  }

  Tone.Transport.scheduleRepeat(repeat, 99)

  return (
    <>
      {!temperature && <p>wait...</p>}
      {temperature && <p>heavily inspired by quintron's weather warlock</p>}
      <button onClick={() => Tone.Transport.stop()}>Stop</button>
    </>
  )
}

export default ToneTest
