import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () =>{

  const [inputList,setInputList] = useState();
  const [Items,setItems] = useState([]);

  const textEnter = (event) =>{
      setInputList(event.target.value);
  }

  const listOfItems = () =>{
      setItems((olditems) =>{
        return [...olditems,inputList]
      });
      setInputList("");
  };

  const deleteItems = (id) =>{
    console.log("deleted")

    setItems((olditems)=>{
      return olditems.filter((arrElement,index) =>{
        return index!== id;
      })
    })
}
  return(
    <>
      <div className="main_div">
        <div className="center_div">
         <br/>
         <h1 className="text-lg-center">ToDo List</h1>
         <br/>
         <input type="text" placeholder="Add an item" onChange={textEnter} value={inputList}/>
         <button onClick={listOfItems}> + </button>
         
          
          <ol>
            {/* <li>{inputList}</li> */}

            {Items.map( (Itemsval,index) => {
               return <ToDoLists text = {Itemsval}
                 key={index}
                 id={index}
                 onSelect = {deleteItems}
               />
            })}

          </ol>
        </div>
      </div>
    </>
  )
}

export default App;