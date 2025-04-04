import { useEffect, useState } from "react";
import Stats from "./components/Stats";

const App = () => {

     const [selected, setSelected] = useState(0);
     const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0,0]);
     const [mostVoted,setMostVoted]=useState();

  const randomizer=()=>{
    const randomInt = Math.floor(Math.random() * 8);
    setSelected(randomInt);
  }

  const voter = (selectedIndex) => {
    const copy = [...votes];
    copy[selectedIndex]=copy[selectedIndex]+1;
    setVotes(copy);
   let maxIndex = votes.indexOf(Math.max(...votes));
    setMostVoted(maxIndex);
  };
    const anecdotes = [
      "If it hurts, do it more often.",
      "Adding manpower to a late software project makes it later!",
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Premature optimization is the root of all evil.",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      "The only way to go fast, is to go well.",
    ];
  

  return (
    <>
      <div style={{ color: "white" }}>{anecdotes[selected]}</div>
      <h4 style={{ color: "white" }}>This one has {votes[selected]} votes;</h4>
      <button onClick={randomizer}>Next anedote</button>
      <button onClick={() => voter(selected)}>Vote</button>

      <h3 style={{ color: "white" }}>The most voted one is:</h3>
      <p style={{ color: "white" }}>
        {anecdotes[mostVoted]}, has {Math.max(...votes)}.
      </p>
    </>
  ); 
};

export default App;
