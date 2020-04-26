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
      {props.parts.map(coursePart => {
        return <Part
              name={coursePart.name}
              numberOfExercises={coursePart.exercises}
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const sumOfExercises = course.parts
    .map((coursePart) => coursePart.exercises)
    .reduce(
      (a, b) => (a + b),
      0
    )

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}>
      </Content>
      <Total total={sumOfExercises}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
