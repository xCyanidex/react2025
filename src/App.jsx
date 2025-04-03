import { useEffect, useState } from "react";
import Stats from "./components/Stats";

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
    if(good>0 || neutral>0 || bad>0){
let average = (good - bad) / (good + bad + neutral);
setAverage(average);
setAllRating(good + bad + neutral);
    }

  },[good,bad,neutral])


  return (
    <>
      <Stats
        ratingHandler={ratingHandler}
        good={good}
        bad={bad}
        neutral={neutral}
        average={average}
        allRating={allRating}
      />
    </>
  ); 
};

export default App;
