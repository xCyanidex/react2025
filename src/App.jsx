import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const ratingHandler=(rating)=>{
    if(rating=='good'){
        setGood(good+1);
    }else if(rating=='neutral'){
setNeutral(neutral+1);
    }else if(rating=='bad'){
setBad(bad+1);
    }
  }

  return (
    <>
      <h1 style={{ color: "white" }}>Give Feedback</h1>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <button style={{}} onClick={() => ratingHandler("good")}>Good</button>
        <button style={{}} onClick={() => ratingHandler("neutral")}>Neutral</button>
        <button style={{}} onClick={() => ratingHandler("bad")}>Bad</button>
      </div>
      <h2 style={{ color: "white" }}>Statistics</h2>
      <p style={{ color: "white" }}>Good: {good}</p>
      <p style={{ color: "white" }}>Neutral: {neutral}</p>
      <p style={{ color: "white" }} >Bad: {bad}</p>
    </>
  ); 
};

export default App;
