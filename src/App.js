import './App.css';
import React, {useState} from 'react'; 

function App() {

  //declare initial list of objects
  const [items, setItems] = useState ([
    {name: "Buy shopping", priority:true}, 
    {name: "Clean Bathroom", priority:false},
    {name: "Car's MOT", priority:true},
  ]);

  const [newItemName, setNewItemName] = useState (""); 
  const [newItemPriority, setNewItemPriority] = useState (false); 

  //render items 
  const itemNodes = items.map ((item, index) => {
    return (
      <li key = {index}>
        <span>{item.name}</span>
        {/* <span>{item.priority}</span> */}
      </li>
    )
  })

  function handleInputChange(event) {
    setNewItemName(event.target.value);
  }

  function handleRadioChange(event) {
    setNewItemPriority(event.target.value);
  }


  function saveNewItem(event) {
    event.preventDefault();
    const newItem = {
      name: newItemName,
      priority: newItemPriority, 
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setNewItemName(""); 
  }




  return (

    <div className="App">
    <h1>ToDo's</h1>  
    <hr></hr>

    <form onSubmit={saveNewItem}>
    <label htmlFor = "item-name">Add new:</label>
    <input id="item-name" type="text" value={newItemName} onChange={handleInputChange} />
    
    
    <label htmlFor = "item-priority">High</label>
    <input id="item-priority" name ="item-priority" type="radio" value={newItemPriority}  onChange={handleRadioChange}/>

    <label htmlFor = "item-priority">Low</label>
    <input id="item-priority" name ="item-priority" type="radio" value={newItemPriority} checked={true} onChange={handleRadioChange}/>

    <input className='button' type="submit" value="Save Task"/>  
    </form>

    <ul> 
      {itemNodes}      
    </ul>


    </div>

  );
}

export default App;
