import React from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  // const input = document.getElementById("normal-text-2");

  // input.addEventListener("input", function () {
  //   console.log(input.value);
  // });

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange}></input>
      <StudentCard name="Amal" age={20} homeTown="Gampaha" />
      <StudentCard name="Kamal" age={25} homeTown="Colombo" />
      <StudentCard name="Nimal" age={23} homeTown="Kurunegala" />
    </div>
  );
}

export default App;
