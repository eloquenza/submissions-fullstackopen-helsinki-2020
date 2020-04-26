import React from 'react'
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

const App = () => {
  const baseAge = 1

  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name="Dennis" age={13 * 2 + baseAge * 2}></Hello>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
