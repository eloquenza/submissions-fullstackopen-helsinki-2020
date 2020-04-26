import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const Feedback = ({handlers}) => {
  return (
    <div>
      <Header text="Feedback"></Header>
      {handlers.map(elem => {
        return (
            <Button text={elem.name} clickHandler={elem.handler}></Button>
          )
      })}
    </div>
  )
}

const Statistics = ({stats, sum, average, positive}) => {
  return (
    <div>
      <Header text="Statistics"></Header>
      {stats.map(elem => {
        return (
            <p>{elem.name}: {elem.stat}</p>
          )
      })}
      <p>sum of stats: {sum}</p>
      <p>average: {average}</p>
      <p>positive: {positive * 100} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stateObjects = [
    {
      name: "good",
      handler: () => setGood(good + 1),
      stat: good
    },
    {
      name: "neutral",
      handler: () => setNeutral(neutral + 1),
      stat: neutral
    },
    {
      name: "bad",
      handler: () => setBad(bad + 1),
      stat: bad
    }
  ]

  const slicedHandlers = stateObjects.map(
    elem => {
      return {
        name: elem.name,
        handler: elem.handler
      }
    }
  )

  const slicedStats = stateObjects.map(
    elem => {
      return {
        name: elem.name,
        stat: elem.stat
      }
    }
  )

  const sum = good + bad + neutral
  const average = ((good * 1) + (bad * -1)) / sum
  const percentageOfPositive = good / sum

  return (
    <div>
      <Feedback handlers={slicedHandlers} />
      <Statistics
        stats={slicedStats}
        sum={sum}
        average={average}
        positive={percentageOfPositive}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
