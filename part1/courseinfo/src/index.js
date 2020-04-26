import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.name} {props.numberOfExercises}</p>
)

const Content = (props) => {
    return (
      <div>
        <Part name={props.part1} numberOfExercises={props.exercises1}></Part>
        <Part name={props.part2} numberOfExercises={props.exercises2}></Part>
        <Part name={props.part3} numberOfExercises={props.exercises3}></Part>
      </div>
    )
}

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}>
      </Content>
      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
