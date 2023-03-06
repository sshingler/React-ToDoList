import './App.css';
import React, {useState} from 'react'; 

function App() {

  //declare initial list of objects
  const [items, setItems] = useState ([
    {name: "Buy shopping", highPriority:true}, 
    {name: "Clean Bathroom", highPriority:false},
    {name: "Car's MOT", highPriority:true},
  ]);

  const [newItemName, setNewItemName] = useState (""); 

  //render items 
  const itemNodes = items.map ((item, index) => {
    return (
      <li key = {index}>
        <span>{item.name}</span>
      </li>
    )
  })

  function handleInputChange(event) {
    setNewItemName(event.target.value);
  }

  function saveNewItem(event) {
    event.preventDefault();
    const newItem = {
      name: newItemName,
      highPriority: false, 
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setNewItemName(""); 

  }




  return (
    <div className="App">
    <h1>ToDo's</h1>  
    <hr></hr>
    <ul> 
      {itemNodes}      
    </ul>

    <form onSubmit={saveNewItem}>
    <label htmlFor = "item-name">Add a new task:</label>
    <input id="item-name" type="text" value={newItemName} onChange={handleInputChange} />
    <input type="submit" value="Save New Task"/>  

    </form>



    </div>
  );
}

export default App;
