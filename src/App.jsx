import { useEffect, useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average,setAverage]=useState(0);
  const [allRating,setAllRating]=useState(0);

  const ratingHandler=(rating)=>{
    if(rating=='good'){
        setGood(prevState=>prevState+1);
    }else if(rating=='neutral'){
setNeutral((prevState) => prevState + 1);
    }else if(rating=='bad'){
setBad((prevState) => prevState + 1);
    }
  }

  useEffect(()=>{
    if(good>0){
let average = (good - bad) / (good + bad + neutral);
setAverage(average);
setAllRating(good + bad + neutral);
    }

  },[good,bad,neutral])


  return (
    <>
      <h1 style={{ color: "white" }}>Give Feedback</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button style={{}} onClick={() => ratingHandler("good")}>
          Good
        </button>
        <button style={{}} onClick={() => ratingHandler("neutral")}>
          Neutral
        </button>
        <button style={{}} onClick={() => ratingHandler("bad")}>
          Bad
        </button>
      </div>
      <h2 style={{ color: "white" }}>Statistics</h2>
      <p style={{ color: "white" }}>Good: {good}</p>
      <p style={{ color: "white" }}>Neutral: {neutral}</p>
      <p style={{ color: "white" }}>Bad: {bad}</p>
      <p style={{ color: "white" }}>all: {allRating}</p>
      <p style={{ color: "white" }}>Average: {average}</p>
    </>
  ); 
};

export default App;
