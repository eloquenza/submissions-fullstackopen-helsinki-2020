import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
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
