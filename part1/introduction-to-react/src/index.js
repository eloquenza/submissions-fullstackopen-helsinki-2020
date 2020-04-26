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

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  const baseAge = 1

  const increaseCounterHandle = () => setCounter(counter + 1)
  const resetCounterHandle = () => setCounter(0)

  return (
    <div>
      <h1>Greetings, page visits: {counter}!</h1>
      <Hello name="Dennis" age={13 * 2 + baseAge * 2}></Hello>
      <button onClick={increaseCounterHandle}>
        plus
      </button>
      <button onClick={resetCounterHandle}>
        zero
      </button>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'))
