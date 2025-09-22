import logo from './logo.svg';
import './App.css';
import OrderedList from './components/OrderedList';
import UnOrderedList from './components/UnOrderedList';

function App() {

  const nameList = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack"
]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <OrderedList itemlist={nameList} />

        <UnOrderedList itemlist={nameList} />
      </header>
    </div>
  );
}

export default App;
