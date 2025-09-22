
import './App.css';
import {useState} from 'react';

function App() {

  const [gender,setGender] = useState('') // use state එක

  const pronounList = {
    'Mr':'Mail',
    'Ms':'Female',
    'Miss':'Female'
  };

  const handlePronounChange = (event) => {
    const selectedPronoun = event.target.value
    setGender(pronounList[selectedPronoun] || ''); 
  };


  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor='pronoun'>Select Pronoun:</label>
        <select key={'pronoun'} onChange={handlePronounChange}> 
          <option value="">Select your pronoun</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
        </select>

        <br/>

        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>

        <div>
          <label>Male</label>
          <input value='Male' type='radio' name='gender' checked={gender === 'Mail' /* use state එක භාවිතයෙන් auto select කිරීම. */} />   
        </div>
        <div>
          <label>Female</label>
          <input value='Female' type='radio' name='gender' checked={gender === 'Female' /* use state එක භාවිතයෙන් auto select කිරීම. */} />
        </div>
        <p>{gender}</p>
      </header>
    </div>
  );
}

export default App;
