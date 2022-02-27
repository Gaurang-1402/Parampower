import ChatMessage from "../../Components/ChatMessage/ChatMessage"
import Logo from "../../assets/images/logo.png"
import patientImg from "../../assets/images/bedpatient.png"
import KeyboardComponent from "../../Components/KeyboardComponent/KeyboardComponent"
import SpeechComponent from "../../Components/SpeechComponent/SpeechComponent"
import React, { useEffect, useRef, useState } from "react"
import "react-simple-keyboard/build/css/index.css"
import axios from "axios"
import { toast } from "react-toastify"
import MLWrapper from "../MLWrapper"
import model from "../../ML-model/model.js"

const MessagingPage = () => {
  const [myID, setMyID] = useState(1)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = () => {
    var data = JSON.stringify({
      action: "getmessages",
      mynumber: "13218775974",
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
        setMessages(response.data.messages)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const [input, setInput] = useState("")
  const [layout, setLayout] = useState("default")

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default"
    setLayout(newLayoutName)
  }
  const handleChatSend = (e) => {
    e.preventDefault()
    var data = JSON.stringify({
      action: "sendmessage",
      fromname: "mr tester",
      fromphone: "13211234567",
      toname: "test person 2",
      tophone: "13218775974",
      text: input,
      sms: "y",
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
    toast.success("Message sent")
    messages.push({
      action: "sendmessage",
      fromname: "mr tester",
      fromId: 2,
      fromphone: "13211234567",
      toname: "test person 2",
      tophone: "13218775974",
      text: input,
      sms: "n",
    })
  }
  const onKeyPress = (button) => {
    console.log("Button pressed", button)

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift()
  }

  return (
    <>
      {" "}
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
      <div className='w-full bg-primary h-screen'>
        <div className='flex justify-center flex-wrap w-full'>
          <div className='flex-col w-full m-auto md:w-1/2'>
            <div className='flex justify-center m-auto align-center py-12'>
              <div className='flex rounded-lg bg-gray-800 p:2 sm:p-6 justify-between flex flex-col w-150 h-150'>
                <div className='flex sm:items-center justify-between py-3 border-b-2 border-gray-200'>
                  <div className='relative flex items-center space-x-4'>
                    <div className='relative'>
                      <span className='absolute text-green-500 right-0 bottom-0'></span>
                    </div>
                    <div className='flex flex-col leading-tight'>
                      <div className='text-2xl mt-1 flex items-center'>
                        <span className='text-white ml-3'>Ana Bobo</span>
                      </div>
                      <span className='ml-4 text-lg text-white'>Nurse</span>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <button
                      type='button'
                      className='inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        />
                      </svg>
                    </button>
                    <button
                      type='button'
                      className='inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  id='messages'
                  className='flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'
                >
                  {messages.map(
                    (message) => (
                      <ChatMessage id={myID} myID={myID} message={message} />
                    ),
                    []
                  )}
                </div>
                <div className='border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0'>
                  <div className='relative flex'>
                    <form onSubmit={(e) => handleChatSend(e)}>
                      <input
                        value={input}
                        placeholder={
                          "Press the microphone to record your message!"
                        }
                        style={{ width: "28rem" }}
                        className='w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3'
                      />
                      <div className='absolute right-0 items-center inset-y-0 hidden sm:flex'>
                        <button
                          type='button'
                          className='inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none'
                        >
                          <span className='font-bold'>Send</span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='h-6 w-6 ml-2 transform rotate-90'
                          >
                            <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center w-full md:w-1/2'>
            <div className='m-auto px-10'>
              <SpeechComponent setInput={setInput} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessagingPage
