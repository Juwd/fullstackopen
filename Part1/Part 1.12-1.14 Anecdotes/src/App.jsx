import { useState } from 'react'

const Results = (props) => (
<>
  <p>
    has {props.stat} votes
  </p>
</>
)

const PopularResults = (props) => (
  <>
  <p>
    {props.popular}
  </p>
    <p>
      has {props.results} votes
    </p>
  </>
  )

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  //declaration of points
  var tempPoints = {}
  for (var i=0; i<anecdotes.length; i++){
    tempPoints[i] = 0
  }
  const [points,setPoints] =useState(tempPoints)
  //declaration of popular anecdote
  const [popularAnecdote,setPopularAnecdote]=useState(0)

  const randomizer = (props) => {
    let max=props.length-1
    let min=0
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomNumber)
    setSelected(randomNumber)
    // return randomNumber
  }

  const addVote= (props) =>{
      const copy = { ...points }
      
      copy[props] += 1
      setPoints(copy)
      console.log(points)
      setPopularAnecdote(Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b))
    }
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={ () => randomizer(anecdotes)}>
        next Anecdote
      </button>
      <button onClick={() => addVote(selected)}>
      vote
      </button>
      <Results stat={points[selected]}/>
      <h1>Anecdotes with most votes</h1>
      <PopularResults popular={anecdotes[popularAnecdote]} results={points[popularAnecdote]}/>
    </div>
  )
}

export default App