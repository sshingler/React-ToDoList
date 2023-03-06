import './App.css';
import React, {useState} from 'react'; 

function App() {

  const [items, setItems] = useState ([
    {name: "Buy shopping", priority:"high"}, 
    {name: "Clean Bathroom", priority:"low"},
    {name: "Car's MOT", priority:"high"},
  ])

  const itemNodes = items.map ((item, index) => {
    return (
      <li key = {index}>
        <span>{item.name}</span>

      </li>
    )
  })


  return (
    <div className="App">
    <h1>ToDo's</h1>  
    <hr></hr>
    <ul>
      {itemNodes}
    </ul>


    
    </div>
  );
}

export default App;
