import React, { useState } from "react"

const Homepage = () => {
  const { user, setUser } = useState({
    email: "someone@example.com",
    phoneNumber: "5547769000",
  })
  return (
    <div className='w-full bg-primary h-screen'>
      <div className='grid-rows-2 grid-flow-col gap-4'>
        <div className='w-56 h-56 bg-tertiary'>One</div>
        <div className='w-56 h-56 bg-tertiary'>Two</div>
        <div className='w-56 h-56 bg-tertiary'>Three</div>
        <div className='w-56 h-56 bg-tertiary'>Four</div>
        <div className='w-56 h-56 bg-tertiary'>Five</div>
      </div>
    </div>
  )
}

export default Homepage
