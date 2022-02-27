import { useState, useEffect } from "react"
import Board from "../Board/Board.js"
import Error from "../Error/Error.js"
import Help from "../Help/Help.js"
import KeyBoard from "../KeyBoard/KeyBoard.js"
import Modal from "../Modal/Modal.js"
import NavBar from "../NavBar/NavBar.js"

function Game(props) {
  const [letter, setLetter] = useState()
  const [changed, setChanged] = useState(false)
  const [letters, setLetters] = useState({})
  const [help, setHelp] = useState(false)
  const [clicked, setClicked] = useState(0)
  const [error, setError] = useState("")
  const [dark, setDark] = useState(false)

  const onClickDown = (event) => {
    if (event.key == "Enter") {
      setLetter("ENTER")
      setClicked(clicked + 1)
    } else if (event.key == "Backspace") {
      setLetter("DEL")
      setClicked(clicked + 1)
    } else if ("abcdefghijklmnopqrstuvwxyz".includes(event.key.toLowerCase())) {
      setLetter(event.key.toUpperCase())
      setClicked(clicked + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onClickDown)

    return () => window.removeEventListener("keydown", onClickDown)
  })

  useEffect(() => {
    props.darkness(dark)
  }, [dark])

  const keyHandler = (letterValue) => {
    setLetter(letterValue)
    setClicked(clicked + 1)
  }
  const LettersHandler = (lettersValue) => {
    setLetters(lettersValue)
    setChanged(!changed)
  }
  return (
    <>
      {help && (
        <Modal title='How to play!' help={setHelp}>
          {" "}
          <Help />{" "}
        </Modal>
      )}
      {error && <Error>{error}</Error>}
      <div style={{ width: `min(600px, 80vw)` }}>
        <NavBar help={setHelp} darkness={setDark} dark={dark} />
        <hr />
        <Board
          letter={letter}
          clicks={clicked}
          letters={LettersHandler}
          error={setError}
        />
        <KeyBoard keyHandler={keyHandler} letters={letters} changed={changed} />
      </div>
    </>
  )
}

export default Game
