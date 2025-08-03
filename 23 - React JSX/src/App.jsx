import React from "react"; //React full packge එකම ඉන්ස්ටල්ල් කිරීම
import { createRoot } from "react-dom/client"; //React DOM එකේ createRoot එක පමණක් ලබා ගැනීම
import StudentCard from "./components/StudentCard";

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <StudentCard name="Amal" age={20} homeTown="Gampaha"/>
      <StudentCard name="Kamal" age={25} homeTown="Colombo"/>
      <StudentCard name="Nimal" age={23} homeTown="Kurunegala"/>
    </div>
  );
};

const container = document.getElementById("root"); //root id එක container variable එකට ගන්නවා.
const root = createRoot(container); //React Dom එකේ root එක විදිහට container එක යොදන්න.
root.render(React.createElement(App)); //React වලින් හදපු App කියන Element එක root එකේ rendre කරන්න.
