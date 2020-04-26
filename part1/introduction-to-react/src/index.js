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

const DisplayCounter = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  const baseAge = 1

  const increaseCounter = () => setCounter(counter + 1)
  const decreaseCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <div>
      <Greetings></Greetings>
      <DisplayCounter counter={counter} />
      <Hello
        name="Dennis"
        age={13 * 2 + baseAge * 2}
      />
      <Button
        clickHandler={increaseCounter}
        text="plus"
      />
      <Button
        clickHandler={decreaseCounter}
        text="minus"
      />
      <Button
        clickHandler={resetCounter}
        text="zero"
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'))
