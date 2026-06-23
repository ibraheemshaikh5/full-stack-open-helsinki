import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const DataField = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad != 0) {
    return (
      <div>
          <DataField text="good" value={good} />
          <DataField text="neutral" value={neutral} />
          <DataField text="bad" value={bad} />
          <DataField text="all" value={good + neutral + bad} />
          <DataField text="average" value={(good - bad) / (good + neutral + bad)} />
          <DataField text="positive" value={good / (good + neutral + bad) * 100 + '%'} />
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App