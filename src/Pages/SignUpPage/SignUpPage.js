import React from "react"
import patientImg from "../../assets/images/bedpatient.png"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"
import darklogo from "../../assets/images/darklogo.png"
import signlogin from "../../assets/newImages/signlogin.png"
const SignUpPage = () => {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(\n  212.35deg,\n  rgba(239, 205, 255, 0.31) 0%,\n  rgba(241, 157, 185, 0.164187) 13.97%,\n  rgba(243, 110, 115, 0.02) 33.07%,\n  rgba(241, 155, 181, 0.156443) 33.07%\n)",
        }}
        className='flex bg-primary justify-center items-center align-center flex-wrap w-full'
      >
        <div className='flex-col w-full md:w-1/2'>
          <SignUpForm />
        </div>
        <div className='flex flex-col w-full md:w-1/2'>
          <img
            className='hidden object-cover w-full h-screen md:block'
            src={signlogin}
          />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
