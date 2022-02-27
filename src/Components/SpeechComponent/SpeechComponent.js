import React, { useState } from "react"
import { Link } from "react-router-dom"
import microphone from "../../assets/icons/Microphone.png"
import goBack from "../../assets/icons/return.png"
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
var current, transcript, upperCase

export default function SpeechComponent({ setInput }) {
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
      setInput(transcript)
    }
  }

  return (
    <div>
      <div
        style={{ width: "35rem", height: "25rem" }}
        className='flex justify-center rounded-lg bg-tertiary'
      >
        <div>
          <button onClick={(e) => startRecord(e)}>
            <img
              alt='mic'
              src={microphone}
              style={{
                width: "10rem",
                height: "10rem",
                margin: "auto",
                marginLeft: "12rem",
              }}
            />
          </button>
          <div className='text-white text-3xl pt-6 mx-8'>
            Click on the microphone to record the message and send!
          </div>

          <div className='text-white text-xl mx-8 py-6'>Transcript: {text}</div>
        </div>
      </div>
      <Link to='/'>
        <img
          alt='return'
          className='my-5 mx-3 cursor-pointer'
          src={goBack}
        ></img>
      </Link>
    </div>
  )
}
