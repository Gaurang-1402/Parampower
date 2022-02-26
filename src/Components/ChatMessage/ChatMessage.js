import React from "react"

const ChatMessage = ({ myID, message }) => {
  return (
    <div className='chat-message '>
      {myID === message.fromID ? (
        <div className='flex items-end'>
          <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
            <div>
              <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'>
                {message.content}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className='chat-message'>
          <div className='flex items-end justify-end'>
            <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end'>
              <div>
                <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>
                  {message.content}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatMessage
