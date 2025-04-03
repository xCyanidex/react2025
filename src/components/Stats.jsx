import RatingButtons from "./RatingButtons";
import StatLine from "./StatLine";
import StatTable from "./StatTable";

const  Stats=({      ratingHandler,
        good,
        bad,
        neutral,
        allRating,
        average
        })=>{

          const RatingNames=['Good','Neutral','Bad','All','Average'];
          const Ratings=[good,neutral,bad,allRating,average];

    return (
      <>
        <h1 style={{ color: "white" }}>Give Feedback</h1>
        <RatingButtons onClickHandler={ratingHandler} />
        {allRating == 0 ? (
          <p style={{ color: "white" }}>No feedback given for now.</p>
        ) : (
          <>
            <h2 style={{ color: "white" }}>Statistics</h2>
            <StatTable RatingNames={RatingNames} Ratings={Ratings} />
            {/* <StatLine text={"Good"} value={good} />
            <StatLine text={"Neutral"} value={neutral} />
            <StatLine text={"Bad"} value={bad} />
            <StatLine text={"All"} value={allRating} />
            <StatLine text={"Average"} value={average} /> */}
          </>
        )}
      </>
    );
}


export default Stats;