import React, { useState } from "react"
import { Link } from "react-router-dom"
import microphone from "../../assets/newImages/mic.png"
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
        style={{
          width: "35rem",
          height: "25rem",
          background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
          borderRadius: "40px",
        }}
        className='flex justify-center '
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
                marginTop: "2rem",
              }}
            />
          </button>
          <div className='text-white text-3xl pt-6 mx-10'>
            Click on the microphone to record the message and send!
          </div>

          <div className='text-white text-xl mx-10 py-6'>
            Transcript: {text}
          </div>
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
