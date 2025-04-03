export default function StatLine({text,value}){
    return (
      <>
        <p style={{ color: "white" }}>{text}: {value}</p>
      </>
    );
}