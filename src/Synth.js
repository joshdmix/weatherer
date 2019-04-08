import React, { useEffect, useState } from 'react'
import Tone from 'tone'

const randomAudibleFreq = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const note = Math.floor(Math.random() * (max - min + 1)) + min
  const bass = note / 2
  const basser = note / 2
  const note4 = note * 4
  return [note, bass, basser, note4]
}

const Synth = props => {
  const [minHz, setMinHz] = useState(30)
  const [maxHz, setMaxHz] = useState(200)
  const [bpm, setBpm] = useState(20)
  const [randomizeBpm, setRandomizeBpm] = useState(false)
  const [repeat, setRepeat] = useState(2)
  Tone.Transport.bpm.value = randomizeBpm ? bpm * Math.random() : bpm

  // const delay = new Tone.Vibrato().toMaster()
  const synth = new Tone.PolySynth({ polyphony: 4, voice: Tone.DuoSynth })
  synth.toMaster()

  Tone.Transport.scheduleRepeat(function(time) {
    const notes = randomAudibleFreq(minHz, maxHz)
    synth.triggerAttackRelease([...notes], '1n', time)
  }, `${repeat}n`)

  Tone.Transport.start()

  return (
    <div>
      <button onClick={() => Tone.Transport.pause()}>Pause</button>
      <button onClick={() => Tone.Transport.start()}>Start</button>
      <button onClick={() => setRandomizeBpm(true)}>Randomize time</button>
      <button onClick={() => Tone.Transport.start()}>Start</button>
      <button>Pause</button>
    </div>
  )
}

export default Synth
