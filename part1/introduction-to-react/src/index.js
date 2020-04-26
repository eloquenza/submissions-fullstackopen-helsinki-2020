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

const App = (props) => {
  const { counter } = props
  const baseAge = 1

  return (
    <div>
      <h1>Greetings, page visits: {counter}!</h1>
      <Hello name="Dennis" age={13 * 2 + baseAge * 2}></Hello>
    </div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
  document.getElementById('root'))
}

refresh()

setInterval(() => {
  refresh()
  counter += 1
}, 10000)
