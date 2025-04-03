export default function RatingButtons({ onClickHandler }) {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button style={{}} onClick={() => onClickHandler("good")}>
          Good
        </button>
        <button style={{}} onClick={() => onClickHandler("neutral")}>
          Neutral
        </button>
        <button style={{}} onClick={() => onClickHandler("bad")}>
          Bad
        </button>
      </div>
    </>
  );
}