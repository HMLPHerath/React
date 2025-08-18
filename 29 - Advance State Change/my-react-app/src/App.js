import React, {useState} from "react";
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";
import "./App.css";


function App() {

  const [text,setText] = useState("");

  const studentList = [
    {name:"Amal", age:20, town:"Gampaha"},
    {name:"Kamal", age:25, town:"Colombo"},
    {name:"Lahiru", age:23, town:"Kurunegala"}

  ];

  const searchedStudent = studentList.filter((student) => 
    student.name.toLowerCase().includes(text.toLowerCase())
  );

  const searchChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSearch={searchChange} />
      <div>
        <p id="sample-text">{text}</p>
      </div>

      {searchedStudent.map((student,index)=>{
        return(
          <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          homeTown={student.town}/>
        );
      })};

      
    </div>
  );
}

export default App;
