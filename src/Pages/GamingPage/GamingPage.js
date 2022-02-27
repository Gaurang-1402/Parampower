import React from "react"
import Game from "../../Components/Wordle/Game/Game"

import MLWrapper from "../MLWrapper"
import model from "../../ML-model/model.js"

const GamingPage = () => {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }

  return (
    <div className='bg-primary'>
      <div>
        <div id='faceFrame'>
          <div className='sharktank' id='enterYourOwnCustomID' />
          <video
            id='camera-video'
            width={64}
            height={48}
            autoPlay
            muted
          ></video>
          <canvas
            id='camera-canvas'
            width={64}
            height={48}
            className='hidden'
          ></canvas>
        </div>
      </div>
      <div className={"app dark:bg-zinc-800"}>
        <Game darkness={darkHandler} />
      </div>
    </div>
  )
}

export default GamingPage
