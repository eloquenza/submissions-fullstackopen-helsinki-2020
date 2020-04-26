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
            <Button
            key={elem.name}
            text={elem.name} clickHandler={elem.handler}></Button>
          )
      })}
    </div>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({stats, sum}) => {
 const statHeader = <Header text="Statistics"></Header>
  if (sum === 0) {
    return (
      <div>
        {statHeader}
        <p>No feedback given yet!</p>
      </div>
    )
  }
  return (
    <div>
      {statHeader}
      <table>
        <tbody>
          {stats.map(elem => {
            return (
              <Statistic key={elem.name} text={elem.name} value={elem.stat}/>
            )
          })}
        </tbody>
      </table>
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

  const allStats = slicedStats
    .concat({
      name: "sum",
      stat: sum
    })
    .concat({
      name: "average",
      stat: ((good * 1) + (bad * -1)) / sum
    })
    .concat({
      name: "positive",
      stat: (good / sum) * 100
    })

  return (
    <div>
      <Feedback handlers={slicedHandlers} />
      <Statistics
        stats={allStats}
        sum={sum}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
