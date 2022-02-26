import React, { useRef } from "react"
import model from "../ML-model/model.js"

const MLWrapper = ({ children }) => {
  // const cursor = useRef(null)

  return (
    <div>
      <div id='faceFrame'>
        <div className='sharktank' id='enterYourOwnCustomID' />
        <video id='camera-video' width={64} height={48} autoPlay muted></video>
        <canvas id='camera-canvas' width={64} height={48} className='hidden'>
          {children}
        </canvas>
      </div>
    </div>
  )
}

export default MLWrapper
