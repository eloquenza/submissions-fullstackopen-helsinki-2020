import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.name} {props.numberOfExercises}</p>
)

const Content = (props) => {
  const zippedArray = props.parts.map((value, index) => [value, props.exercisesNumbers[index]])

  return (
    <div>
      {zippedArray.map(element => {
        return <Part
              name={element[0]}
              numberOfExercises={element[1]}
            >
          </Part>
      })}
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]
  const exercisesNumbers = [
    10,
    7,
    14
  ]
  const sumOfExercises = exercisesNumbers.reduce(
    (a, b) => (a + b),
    0
  )

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts} exercisesNumbers={exercisesNumbers}>
      </Content>
      <Total total={sumOfExercises}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
