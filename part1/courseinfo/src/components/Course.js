import React from 'react'
import Header from './Header'

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

const Course = ({course}) => {
    const sumOfExercises = course.parts.reduce(
        (accumulator, newPart) => (accumulator + newPart.exercises),
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

export default Course;
