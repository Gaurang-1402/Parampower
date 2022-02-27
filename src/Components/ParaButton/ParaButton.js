import React from "react"

const ParaButton = ({ content, icon, childRef, bgColor }) => {
  console.log(bgColor)
  return (
    <button
      ref={childRef}
      type='button'
      styles={{
        background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
      }}
      className={`cursor-pointer w-128 rounded-xl h-56 bg-${bgColor}`}
    >
      <div className='flex  flex-col justify-center items-center h-full'>
        <div>
          <img src={icon}></img>
        </div>
        <div className='font-medium pt-4 leading-tight text-4xl mt-0 mb-2 text-white'>
          {content}
        </div>
      </div>
    </button>
  )
}

export default ParaButton
