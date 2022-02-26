import React, { useState } from "react"

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
var current, transcript, upperCase

export default function SpeechComponent({ setWriteMessage }) {
  const [text, setText] = useState()
  const startRecord = (e) => {
    recognition.start(e)
    recognition.onresult = (e) => {
      current = e.resultIndex
      transcript = e.results[current][0].transcript
      upperCase = transcript.charAt(0).toUpperCase() + transcript.substring(1)
      console.log("voice event", e)
      console.log("transcript", transcript)
      setText(transcript)
      setWriteMessage(transcript)
    }
  }

  return (
    <div>
      <button onClick={(e) => startRecord(e)}>
        <span role='img' aria-label='mic'>
          :microphone2:
        </span>
      </button>
      <div>Transcript: {text}</div>
    </div>
  )
}
