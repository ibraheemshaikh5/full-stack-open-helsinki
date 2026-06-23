import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Stats = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
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
      <Stats text="good" value={good} />
      <Stats text="neutral" value={neutral} />
      <Stats text="bad" value={bad} />
      <Stats text="all" value={good + neutral + bad} />
      <Stats text="average" value={(good - bad) / (good + neutral + bad)} />
      <Stats text="positive" value={good / (good + neutral + bad) * 100 + '%'} />
    </div>
  )
}

export default App