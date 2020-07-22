import React, {useState} from 'react';
import Forecast from './Components/Forecast/Forecast'
import SearchBar from './Components/SearchBarComponent/SearchBar'
import { IUserInput} from './Commons/Interfaces'
import './App.css';

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Mars"
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
  return (
    <div className = 'App'> 
      <h1>Weather App</h1>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
    </div>
  );
}

export default App;
