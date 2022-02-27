import React, { useState, useRef, useEffect } from "react"
import regularlogo from "../../assets/images/regularlogo.png"
import ParaButton from "../../Components/ParaButton/ParaButton"
import cloud from "../../assets/icons/cloud.png"
import games from "../../assets/icons/Games.png"
import message from "../../assets/icons/GroupMessage.png"
import meal from "../../assets/icons/meal.png"
import nurse from "../../assets/icons/Nurse.png"
import shower from "../../assets/icons/SafetyShower.png"
import light from "../../assets/icons/Lights.png"
import homescreenbackground from "../../assets/newImages/homescreenbackground.png"
import mainLogo from "../../assets/newImages/mainLogo.png"

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

  const toggleLights = () => {
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

    toast.success("Lights have been toggled off")
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
      <div
        style={{ backgroundImage: `url(${homescreenbackground})` }}
        className='w-full h-screen'
      >
        <div className='px-12 m-auto w-5/6'>
          <div className='flex flex-row items-center py-12 justify-between h-19'>
            <div styles={{ width: "352px", height: "98px" }}>
              <img src={mainLogo} />
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='grid py-12 grid-cols-3 gap-12'>
              <div ref={callnurse}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Nurse"}
                  icon={nurse}
                  bgColor={
                    hover === "Nurse"
                      ? "gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      : "gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
                  }
                ></ParaButton>
              </div>
              <div ref={restroom}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Restroom"}
                  icon={shower}
                  bgColor={
                    hover === "Restroom"
                      ? "gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      : "gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
                  }
                ></ParaButton>
              </div>
              <div ref={meals}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Meal"}
                  icon={meal}
                  bgColor={
                    hover === "Meal"
                      ? "gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      : "gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
                  }
                ></ParaButton>
              </div>
              <div ref={messaging}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Messaging"}
                  icon={message}
                  bgColor={
                    hover === "Messaging"
                      ? "gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      : "gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
                  }
                ></ParaButton>
              </div>
              <div ref={lights}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Toggle Lights"}
                  icon={light}
                  bgColor={
                    hover === "Lights"
                      ? "gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      : "gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
                  }
                ></ParaButton>
              </div>
              <div ref={gaming}>
                <ParaButton
                  onClick={() => {
                    console.log("clicked")
                  }}
                  content={"Gaming"}
                  icon={games}
                  bgColor={
                    hover === "Gaming"
                      ? "gradient-to-r from-green-300 via-blue-500 to-purple-600"
                      : "gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
                  }
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
