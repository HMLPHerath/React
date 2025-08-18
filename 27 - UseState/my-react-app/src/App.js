import React, {useState} from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {

  const [text, setText] = useState(20); //UseState

  //Handle function use
  const handleChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value); //UseState
  };


  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange}></input>
      <div>
        <p id="sample-text">{text}</p>
      </div>
      <StudentCard name="Amal" age={20} homeTown="Gampaha" />
      <StudentCard name="Kamal" age={25} homeTown="Colombo" />
      <StudentCard name="Nimal" age={23} homeTown="Kurunegala" />
    </div>
  );
}

export default App;
