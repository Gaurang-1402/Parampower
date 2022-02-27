import React, { useState, useRef, useEffect } from "react"
import Logo from "../../assets/images/logo.png"
import ParaButton from "../../Components/ParaButton/ParaButton"
import cloud from "../../assets/icons/cloud.png"
import games from "../../assets/icons/Games.png"
import message from "../../assets/icons/GroupMessage.png"
import meal from "../../assets/icons/meal.png"
import nurse from "../../assets/icons/Nurse.png"
import shower from "../../assets/icons/SafetyShower.png"
import light from "../../assets/icons/Lights.png"

import returnIcon from "../../assets/icons/return.png"
import MLWrapper from "../MLWrapper"
import model from "../../ML-model/model.js"
import { Link } from "react-router-dom"
import axios from "axios"

import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Homepage = () => {
  const { user, setUser } = useState({
    email: "someone@example.com",
    phoneNumber: "5547769000",
  })
  let navigate = useNavigate()

  const [hover, setHover] = useState("")
  var prev = "default"
  var curr = "somevalue"

  const _navigateTo = (nav) => {
    console.log("Here")
    navigate(nav)
  }

  const cursor = useRef(null)
  const callnurse = useRef(null)
  const restroom = useRef(null)
  const meals = useRef(null)
  const messaging = useRef(null)
  const gaming = useRef(null)
  const lights = useRef(null)

  const _selectOption = () => {
    setInterval(() => {
      var c = cursor.current.getBoundingClientRect()
      console.log("Cursor", c.top, c.right, c.bottom, c.left)
      console.log(elementsIntersect(cursor.current, callnurse.current))
      if (elementsIntersect(cursor.current, callnurse.current)) {
        console.log("Nurse")
        console.log(prev, curr)
        prev = curr
        curr = "Nurse"
        console.log(prev, curr)
        setHover("Nurse")
      } else if (elementsIntersect(cursor.current, restroom.current)) {
        console.log("Restroom")
        prev = curr
        curr = "Restroom"
        setHover("Restroom")
      } else if (elementsIntersect(cursor.current, meals.current)) {
        console.log("Meal")
        prev = curr
        curr = "Meal"
        setHover("Meal")
      } else if (elementsIntersect(cursor.current, messaging.current)) {
        console.log("Messaging")
        prev = curr
        curr = "Messaging"
        setHover("Messaging")
      } else if (elementsIntersect(cursor.current, gaming.current)) {
        console.log("Gaming")
        prev = curr
        curr = "Gaming"
        setHover("Gaming")
      } else if (elementsIntersect(cursor.current, lights.current)) {
        console.log("Lights")
        prev = curr
        curr = "Lights"
        setHover("Lights")
      } else {
        prev = "default"
        curr = "someValue"
      }

      if (curr == prev) {
        console.log("NAVIGATE TO", curr)
        if (curr === "Nurse") {
          getHelp()
        } else if (curr === "Restroom") {
          getRestRoom()
        } else if (curr === "Meal") {
          getMeal()
        } else if (curr === "Lights") {
          _navigateTo("lights")
        } else if (curr === "Gaming") {
          _navigateTo("game")
        } else if (curr === "Messaging") {
          _navigateTo("message")
        }
      }
    }, 3000)
  }

  useEffect(() => {
    console.log("Hello")
    _selectOption()
  }, [])

  const elementsIntersect = (elA, elB) => {
    if (!elA || !elB) return false
    const a = elA.getBoundingClientRect()
    const b = elB.getBoundingClientRect()
    return (
      a.top <= b.bottom &&
      a.top >= b.top &&
      a.bottom <= b.bottom &&
      a.bottom >= b.top &&
      a.left >= b.left &&
      a.left <= b.right &&
      a.right <= b.right &&
      a.right >= b.left
    )
  }

  const getHelp = (e) => {
    var data = JSON.stringify({
      action: "addnotification",
      userid: "2",
      type: "help",
    })

    var config = {
      method: "post",
      url: "https://us-central1-aiot-fit-xlab.cloudfunctions.net/parampower",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })

    toast.success("Help request sent to your nurse")
  }

  const getRestRoom = () => {
    var data = JSON.stringify({
      action: "addnotification",
      userid: "2",
      type: "restroom",
    })

    var config = {
      method: "post",
      url: "https://us-central1-aiot-fit-xlab.cloudfunctions.net/parampower",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })

    toast.success("Restroom request sent to your nurse")
  }

  const getMeal = () => {
    var data = JSON.stringify({
      action: "addnotification",
      userid: "2",
      type: "meal",
    })

    var config = {
      method: "post",
      url: "https://us-central1-aiot-fit-xlab.cloudfunctions.net/parampower",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })

    toast.success("Meal request sent to your nurse")
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
              {/* <button
                ref={button1}
                onClick={() => {
                  console.log("clicked")
                }}
                type='button'
                className='cursor-pointer w-128 rounded-xl h-56 bg-tertiary'
              >
                <div className='flex flex-col justify-center items-center h-full'>
                  <div>
                    <img src={nurse} alt='nurse'></img>
                  </div>
                  <div className='font-medium pt-4 leading-tight text-4xl mt-0 mb-2 text-white'>
                    Help
                  </div>
                </div>
              </button> */}
              <div ref={callnurse}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Nurse"}
                  icon={nurse}
                  bgColor={hover === "Nurse" ? "secondary" : "tertiary"}
                ></ParaButton>
              </div>
              <div ref={restroom}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Restroom"}
                  icon={shower}
                  bgColor={hover === "Restroom" ? "secondary" : "tertiary"}
                ></ParaButton>
              </div>
              <div ref={meals}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Meal"}
                  icon={meal}
                  bgColor={hover === "Meal" ? "secondary" : "tertiary"}
                ></ParaButton>
              </div>
              <div ref={messaging}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Messaging"}
                  icon={message}
                  bgColor={hover === "Messaging" ? "secondary" : "tertiary"}
                ></ParaButton>
              </div>
              <div ref={lights}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Toggle Lights"}
                  icon={cloud}
                  bgColor={hover === "Lights" ? "secondary" : "tertiary"}
                ></ParaButton>
              </div>
              <div ref={gaming}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Gaming"}
                  icon={games}
                  bgColor={hover === "Gaming" ? "secondary" : "tertiary"}
                ></ParaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
