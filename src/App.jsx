  import { useState, useEffect } from "react";
  import axios from "axios";
import Note from "./components/Note";

  const App = () => {
    const [persons, setPersons] = useState([]);
    const [newPersonName,setNewPersonName]=useState("");
    const [newPersonNumber, setNewPersonNumber] = useState("");

      useEffect(() => {
        console.log("effect");
        axios.get("http://localhost:3001/persons").then((response) => {
          console.log("promise fulfilled");
          console.log(response.data)
          setPersons(response.data);
        });
      }, []);
      console.log("render", persons.length, "notes");

  const  addPerson = (event) => {
        event.preventDefault();
        const personObject = {
          name: newPersonName,
          number:newPersonNumber
        };

        axios
          .post("http://localhost:3001/persons", personObject)
          .then((response) => {
            setPersons(persons.concat(response.data));
            setNewPersonName("");
            setNewPersonNumber("");
            console.log(response);
          });
      };
      const handleNameChange=(e)=>{
setNewPersonName(e.target.value);
      }

      const handleNumberChange=(e)=>{
        setNewPersonNumber(e.target.value);
      }

    return (
      <div>
        <form onSubmit={addPerson}>
          <label>Name</label>
          <input value={newPersonName} onChange={handleNameChange} />
          <label>Number</label>
          <input value={newPersonNumber} onChange={handleNumberChange} />
          <button type="submit">Submit</button>
        </form>
        {persons.map((person) => {
          return (
            <p>
              Name: {person.name}, Number: {person.number}
            </p>
          );
        })}
      </div>
    );
  };

  export default App;
