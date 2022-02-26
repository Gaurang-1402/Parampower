import React from "react"

const ParaButton = ({ content, icon, childRef }) => {
  return (
    <button
      ref={childRef}
      onClick={() => {
        console.log("clicked")
      }}
      type='button'
      className='cursor-pointer w-128 rounded-xl h-56 bg-tertiary'
    >
      <div className='flex flex-col justify-center items-center h-full'>
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
