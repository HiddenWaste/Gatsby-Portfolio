import React, { useState } from 'react';
import * as Tone from 'tone';

const MusicGenerator = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playChord = async () => {
    await Tone.start(); // Ensure the audio context is started
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    const chord = ['C4', 'E4', 'G4'];
    synth.triggerAttackRelease(chord, '4n');

    setIsPlaying(true);

    // Reset the playing state after the chord is played
    setTimeout(() => setIsPlaying(false), 500);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Music Generator</h1>
      <p>Click the button to play a C Major chord.</p>
      <button
        onClick={playChord}
        disabled={isPlaying}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isPlaying ? 'not-allowed' : 'pointer',
          backgroundColor: isPlaying ? '#ccc' : '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isPlaying ? 'Playing...' : 'Play Chord'}
      </button>
    </div>
  );
};

export default MusicGenerator;