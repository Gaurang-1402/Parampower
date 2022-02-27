import React, { useState, useRef, useEffect } from "react"
import Logo from "../../assets/images/logo.png"
import ParaButton from "../../Components/ParaButton/ParaButton"
import cloud from "../../assets/icons/cloud.png"
import games from "../../assets/icons/Games.png"
import message from "../../assets/icons/GroupMessage.png"
import meal from "../../assets/icons/meal.png"
import nurse from "../../assets/icons/Nurse.png"
import shower from "../../assets/icons/SafetyShower.png"
import returnIcon from "../../assets/icons/return.png"
import MLWrapper from "../MLWrapper"
import model from "../../ML-model/model.js"
import { Link } from "react-router-dom"

const Homepage = () => {
  const { user, setUser } = useState({
    email: "someone@example.com",
    phoneNumber: "5547769000",
  })

  const cursor = useRef(null)
  const button1 = useRef(null)

  useEffect(() => {
    const divElement = button1.current
    console.log(divElement) // logs <div>I'm an element</div>
    console.log(cursor.current)
    if (elementsIntersect(cursor.current, button1.current)) {
      console.log("click")
    }
  }, [])

  const elementsIntersect = (elA, elB) => {
    if (!elA || !elB) return false
    const a = elA.getBoundingClientRect()
    const b = elB.getBoundingClientRect()
    return (
      ((b.top >= a.top && b.top <= a.bottom) ||
        (b.bottom >= a.top && b.bottom <= a.bottom)) &&
      ((b.left >= a.left && b.left <= a.right) ||
        (b.right >= a.left && b.right <= a.right))
    )
  }

  return (
    <>
      <div>
        <div id='faceFrame'>
          <div ref={cursor} className='sharktank' id='enterYourOwnCustomID' />
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
      <div style={{ zIndex: 100 }} className='w-full bg-primary h-screen'>
        <div className='px-12 m-auto w-5/6'>
          <div className='flex flex-row items-center py-12 justify-between h-19'>
            <div>
              <img src={returnIcon} />
            </div>
            <div>
              <img className='pb-8' src={Logo} alt='logo' />
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='grid py-12 grid-cols-3 gap-12'>
              <button
                ref={button1}
                onClick={() => {
                  console.log("clicked")
                }}
                type='button'
                className='cursor-pointer w-128 rounded-xl h-56 bg-tertiary'
              >
                <div className='flex flex-col justify-center items-center h-full'>
                  <div>
                    <img src={nurse}></img>
                  </div>
                  <div className='font-medium pt-4 leading-tight text-4xl mt-0 mb-2 text-white'>
                    Help
                  </div>
                </div>
              </button>
              <Link to='/restroom'>
                <ParaButton content={"Restroom"} icon={shower}></ParaButton>
              </Link>
              <Link to='/food'>
                <ParaButton content={"Meal"} icon={meal}></ParaButton>
              </Link>
              <Link to='/message'>
                <ParaButton content={"Messaging"} icon={message}></ParaButton>
              </Link>
              <Link to='/room-controls'>
                <ParaButton content={"Room Controls"} icon={cloud}></ParaButton>
              </Link>
              <Link to='/game'>
                <ParaButton content={"Gaming"} icon={games}></ParaButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
