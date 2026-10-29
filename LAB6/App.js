import {useState} from "react";
import './App.css';

function App() {
  const [first,setFirst]=useState("");
  const [last,setLast]=useState("");

  return (
    <div>data entry form <br />
    firstname:
    <input onChange={(e)=>setFirst(e.target.value)}/><br />
    lastname:
    <input onChange={(e)=>setLast(e.target.value)}/><br />
    <button onClick={ ()=> alert(` Hello ${first} ${last} `)}> 
      Greet Me</button>
    </div>  
  );
}

export default App;