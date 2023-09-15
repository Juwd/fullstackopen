import { useState } from 'react'

const Statistics =  (props) => {
  var total = props.results.reduce((partialSum,a) => partialSum + a, 0);
  var ave = (props.results[0]+props.results[2]*-1)/total
  var pos = (props.results[0]/total * 100).toFixed(2)
  if (total !== 0)
  {
    return (
      <>
        <table>
          <tbody>
          <StatisticLine text="good" value={props.results[0]}/>
          <StatisticLine text="neutral" value={props.results[1]}/>
          <StatisticLine text="bad" value={props.results[2]}/>
          <StatisticLine text="all" value={total}/>
          <StatisticLine text="average" value={ave}/>
          <StatisticLine text="positive" value={pos +' %'}/>
          </tbody>
        </table>
        
      </>
    )
  }
  else
  {
    return(
      <p>
        no feedback is given
      </p>
    )
  }
}

const StatisticLine = (props) => (
  <>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  </>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={ () => setGood(good + 1)} text="good" ></Button>
      <Button handleClick={ () => setNeutral(neutral + 1)} text="neutral" ></Button>
      <Button handleClick={ () => setBad(bad + 1)} text="bad" ></Button>
      <h1>Statistics</h1>
      <Statistics results={[good,neutral,bad]}/>
    </div>
  )
}

export default App