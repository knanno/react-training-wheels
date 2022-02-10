import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('corbin')
  //there is a naming convention here. Typically, we set the variable (name) to something logical.
  //Then, the function is named setVariable. So we are setting the variable. If varaible is age, then function is setAge.

  //array descturctuing:
  //const [name, setName]
  //const [the value set in the useState function, a new function to use to change the value]
  //which grabs the two variables available in the useState function.

  const [events, setEevents] = useState([
    {title: "42 is the best number", id:1},
    {title: "AA changed my flight times", id:2},
    {title: "Octopuses are the best.", id:3}
  ])


    const handleClick = () => {
      //the setName function is called above on our useState const array.
      //This will handle our changed state.
      setName('Korbyn')
      //^ this will update the value of the name variable AND reevaluates the entire component function
      console.log(name)
    }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event)=> (
        <div key={event.id}>
            <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
