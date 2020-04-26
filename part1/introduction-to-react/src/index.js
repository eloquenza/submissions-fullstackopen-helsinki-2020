import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
     <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Greetings = () => (
  <h1>Greetings</h1>
)

const Button = ({ clickHandler, text }) => {
  return (
    <button onClick={clickHandler}>
      {text}
    </button>
  )
}

const DisplayCounter = ({name, counter }) => {
  return (
    <div>{name}: {counter}</div>
  )
}

function removeLast(array, element) {
  let arr = [...array]
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === element) {
      arr.splice(i, 1)
      break
    }
  }
  return arr
}

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const baseAge = 1

  const increaseLeft = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }
  const increaseRight = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  }
  const decreaseLeft = () => {
    setAll(removeLast(allClicks, "L"))
    setLeft(left - 1)
  }
  const decreaseRight = () => {
    setAll(removeLast(allClicks, "R"))
    setRight(right - 1)
  }

  return (
    <div>
      <Greetings></Greetings>
      <DisplayCounter name={"left"} counter={left} />
      <DisplayCounter name={"right"} counter={right} />
      <Hello
        name="Dennis"
        age={13 * 2 + baseAge * 2}
      />
      <Button
        clickHandler={increaseLeft}
        text="left plus"
      />
      <Button
        clickHandler={decreaseLeft}
        text="left minus"
      />
      <Button
        clickHandler={increaseRight}
        text="right plus"
      />
      <Button
        clickHandler={decreaseRight}
        text="right minus"
      />
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'))
