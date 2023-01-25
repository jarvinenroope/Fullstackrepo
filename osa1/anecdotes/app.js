import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

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

  const [selected, setSelected] = useState(0) // Create the state that corresponds to the selected quote.
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)) // Create an array for the votes of each quote.
  const [mostVoted, setMostVoted] = useState(0) // Save the index of the most voted quote.

  const handleAnecdoteClick = () => setSelected(Math.floor(Math.random() * 8))

  const handleVote = () => {
    const tempVotes = { ...votes }
    tempVotes[selected] += 1
    setVotes(tempVotes)
    if (votes[selected] >= votes[mostVoted]) {
      setMostVoted(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleAnecdoteClick} text="next anecdote" />
      <h1>Anecdote with the most votes</h1>
      {anecdotes[mostVoted]}
      <br/>
      has {votes[mostVoted]} votes
    </div>
  )
}

export default App
