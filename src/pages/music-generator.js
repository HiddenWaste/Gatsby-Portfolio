import React, { useState } from 'react';
import * as Tone from 'tone';

// Constant for all notes
const notes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];



const PlayChordButton = () => {

  // Initialize all the different useState hooks here
  const [isPlayingChord, setIsPlayingChord] = useState(false);              // Hook for playing a chord
  const [isPlayingRandomChord, setIsPlayingRandomChord] = useState(false);  // Hook for playing a random chord
  const [isPlayingScale, setIsPlayingScale] = useState(false);              // Scale Time!
  const [isPlayingRandomScale, setIsPlayingRandomScale] = useState(false);  // Randomize Scale
  const [textBoxValue, setTextBoxValue] = useState("");                    // Hook for textbox value


  const playChord = async () => {
    await Tone.start(); // Ensure the audio context is started
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    const chord = ['C4', 'E4', 'G4'];
    synth.triggerAttackRelease(chord, '4n');
    setTextBoxValue(chord);

    setIsPlayingChord(true);

    // Reset the playing state after the chord is played
    setTimeout(() => setIsPlayingChord(false), 500);
  };

  // Play a Random Chord
  const playRandomChord = async () => {
    await Tone.start(); // Ensure the audio context is started
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    // Generate a random index to select a random note
    const randomNoteIndex = Math.floor(Math.random() * (notes.length - 7));

    // Generate a chord based on the random note
    const chord = [
      notes[randomNoteIndex],                       // Root note
      notes[(randomNoteIndex + 4) % notes.length],  // Third note
      notes[(randomNoteIndex + 7) % notes.length]   // Fifth note
    ];

    synth.triggerAttackRelease(chord, '4n');    // Play the chord
    setTextBoxValue(chord);                     // Write the chord to the text box 

    setIsPlayingRandomChord(true);
    setTimeout(() => setIsPlayingRandomChord(false), 500);
  };

  // Scales Section
  // Play a C Major Scale
  const playScale = async () => {
    await Tone.start(); // Ensure the audio context is started
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    const scale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];

    // Play through the scale
    for (let i = 0; i < scale.length; i++) {
      synth.triggerAttackRelease(scale[i], '4n');
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 1 second
    }

    setIsPlayingScale(true);

    // Reset the playing state after the chord is played
    setTimeout(() => setIsPlayingScale(false), 500);
  };

  // Play a Random Scale
  const playRandomScale = async () => {
    await Tone.start(); // Ensure the audio context is started
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    // Generate a random index to select a random note
    const randomNoteIndex = Math.floor(Math.random() * (notes.length));

    // Generate a scale based on the random note
    const scale = [
      notes[randomNoteIndex],                       // Root note
      notes[(randomNoteIndex + 2) % notes.length],  // Second note
      notes[(randomNoteIndex + 4) % notes.length],  // Third note
      notes[(randomNoteIndex + 5) % notes.length],  // Fourth note
      notes[(randomNoteIndex + 7) % notes.length],  // Fifth note
      notes[(randomNoteIndex + 9) % notes.length],  // Sixth note
      notes[(randomNoteIndex + 11) % notes.length], // Seventh note
      notes[(randomNoteIndex + 12) % notes.length]  // Octave note
    ];

    // Play through the scale
    for (let i = 0; i < scale.length; i++) {
      synth.triggerAttackRelease(scale[i], '4n');
      // Write the note to the text box
      setTextBoxValue(scale[i]);
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 1 second
    }

    setIsPlayingRandomScale(true);
    setTimeout(() => setIsPlayingRandomScale(false), 500);
  };

  const handleTextBoxChange = (event) => {
    setTextBoxValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Music Generator</h1>
      <p>Click the button below to play a C Major chord.</p>
      <button
        onClick={playChord}
        disabled={isPlayingChord}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isPlayingChord ? 'not-allowed' : 'pointer',
          backgroundColor: isPlayingChord ? '#ccc' : '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isPlayingChord ? 'Playing...' : 'Play Chord'}
      </button>
      <br /> <br />
      <button
        onClick={playRandomChord}
        disabled={isPlayingRandomChord}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isPlayingRandomChord ? 'not-allowed' : 'pointer',
          backgroundColor: isPlayingRandomChord ? '#ccc' : '#c511c7',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isPlayingRandomChord ? 'Playing...' : 'Play Random Chord'}
      </button>
      <br /> <br />

      {/* Button to play a C Scale */}
      <button
        onClick={playScale}
        disabled={isPlayingScale}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isPlayingScale ? 'not-allowed' : 'pointer',
          backgroundColor: isPlayingScale ? '#ccc' : '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isPlayingScale ? 'Playing...' : 'Play C Major Scale'}
      </button>
      <br /> <br />

      {/* Button to play a Random Scale */}
      <button
        onClick={playRandomScale}             // Call the playRandomScale function on click
        disabled={isPlayingRandomScale}       // Disable the button if isPlayingRandomScale usestate is true 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isPlayingRandomScale ? 'not-allowed' : 'pointer',
          backgroundColor: isPlayingRandomScale ? '#ccc' : '#c511c7',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isPlayingRandomScale ? 'Playing...' : 'Play Random Scale'}
      </button>

      {/* Inputs for a user to select key, scale, or chord */}
      <br /> <br />

        <br /> <br />
        
      {/* Button To play constructed scale or chord */}
      <button
        onClick={playRandomScale}
        disabled={isPlayingRandomScale}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isPlayingRandomScale ? 'not-allowed' : 'pointer',
          backgroundColor: isPlayingRandomScale ? '#ccc' : '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Play Constructed Scale or Chord
      </button>

      {/*  Now We create a text box to display information, both for fun and debugging purposes!  */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <p>isPlayingChord: {isPlayingChord.toString()}</p>
        <p>isPlayingRandomChord: {isPlayingRandomChord.toString()}</p>
        <p>isPlayingScale: {isPlayingScale.toString()}</p>
        <p>isPlayingRandomScale: {isPlayingRandomScale.toString()}</p>
        <input
          type="text"
          value={textBoxValue}
          onChange={handleTextBoxChange}
          style={{ marginTop: '10px', padding: '5px', width: '70%', fontSize: '16px' }}
        />
      </div>
    </div>
  );
};

export default PlayChordButton;