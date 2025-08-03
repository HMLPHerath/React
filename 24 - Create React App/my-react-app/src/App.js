import React from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <StudentCard name="Amal" age={20} homeTown="Gampaha" />
      <StudentCard name="Kamal" age={25} homeTown="Colombo" />
      <StudentCard name="Nimal" age={23} homeTown="Kurunegala" />
    </div>
  );
}

export default App;
