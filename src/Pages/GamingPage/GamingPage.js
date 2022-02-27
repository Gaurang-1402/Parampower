import React from "react"
import Game from "../../Components/Wordle/Game/Game"
const GamingPage = () => {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }
  return (
    <div className='bg-primary'>
      {" "}
      <div className={"app dark:bg-zinc-800"}>
        <Game darkness={darkHandler} />
      </div>
    </div>
  )
}

export default GamingPage
