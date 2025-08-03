import React from "react"; //React full packge එකම ඉන්ස්ටල්ල් කිරීම
import { createRoot } from "react-dom"; //React DOM එකේ createRoot එක පමණක් ලබා ගැනීම

// Create React Componnent
const Student = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.age),
    React.createElement("h3", {}, props.homeTown),
  ]);
};

const StudentCard = (props) => {
  return React.createElement(
    "div",
    { className: "st-card" },
    React.createElement("img", {
      src: "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
      alt: "Student Image",
      className: "student-image",
    }),
    React.createElement(Student, { ...props }, null),
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "My React App"),
    React.createElement(StudentCard, {
      name: "Amal",
      age: 22,
      homeTown: "Gampaha"
    }, null),
    React.createElement(StudentCard,{
      name: "Lahiru",
      age: 23,
      homeTown: "Kurunegala"
    },null),
    React.createElement(StudentCard,{
      name: "Kamal",
      age: 25,
      homeTown: "Colombo"
    },null),
    React.createElement(StudentCard),
    React.createElement(StudentCard),
    React.createElement(StudentCard),
  ]);
};

const container = document.getElementById("root"); //root id එක container variable එකට ගන්නවා.
const root = createRoot(container); //React Dom එකේ root එක විදිහට container එක යොදන්න.
root.render(React.createElement(App)); //React වලින් හදපු App කියන Element එක root එකේ rendre කරන්න.
