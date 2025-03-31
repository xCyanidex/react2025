const  Stats=({      ratingHandler,
        good,
        bad,
        neutral,
        allRating,
        average
        })=>{

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
}


export default Stats;