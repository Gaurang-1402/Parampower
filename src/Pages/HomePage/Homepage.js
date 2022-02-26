import React, { useState } from "react"
import Logo from "../../assets/images/logo.png"
import ParaButton from "../../Components/ParaButton/ParaButton"
import cloud from "../../assets/icons/cloud.png"
import games from "../../assets/icons/Games.png"
import message from "../../assets/icons/GroupMessage.png"
import meal from "../../assets/icons/meal.png"
import nurse from "../../assets/icons/Nurse.png"
import shower from "../../assets/icons/SafetyShower.png"
import returnIcon from "../../assets/icons/return.png"

const Homepage = () => {
  const { user, setUser } = useState({
    email: "someone@example.com",
    phoneNumber: "5547769000",
  })
  return (
    <div className='w-full bg-primary h-screen'>
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
            <ParaButton content={"Help"} icon={nurse}></ParaButton>
            <ParaButton content={"Restroom"} icon={shower}></ParaButton>
            <ParaButton content={"Meal"} icon={meal}></ParaButton>
            <ParaButton content={"Messaging"} icon={message}></ParaButton>
            <ParaButton content={"Room Controls"} icon={cloud}></ParaButton>
            <ParaButton content={"Gaming"} icon={games}></ParaButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
