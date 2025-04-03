export default function StatTable({ Ratings, RatingNames }) {


  return (
    <>
      <table style={{ color: "white" }}>
        <tbody>
          {RatingNames.map((RatingName, i) => {
            
            return (
              <tr key={i}>
                <td>{RatingName}</td>
                <td>{Ratings[i]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}