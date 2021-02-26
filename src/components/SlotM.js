import {  useState} from "react";
import React from "react";


const App=()=>{
  const[name, setName]=useState("");
  const [lastName, setLastName]=useState("");
  const[fullName, setFullName]=useState("");
  const [lastNameNew, setLastNameNew]=useState("");

  const inputEvent=(sdb)=>{
    console.log(sdb.target.value);
    setName(sdb.target.value)
    
  };
  const inputEventTwo=(sdb1)=>{    //also u can pass same event(sdb or sdb1)//
    console.log(sdb1.target.value);
    setLastName(sdb1.target.value)
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);

  }
return(
  <div>
    <form onSubmit={onSubmit}>
    <h1>hello:  {fullName} {lastNameNew}</h1>
    <input type="text" placeholder="Enter Your Name"
     onChange={inputEvent}
    value={name}/>
<br/>
<input type="text" placeholder="Enter Your lastName"
     onChange={inputEventTwo}
    value={lastName}/>
    <br/>
    <button >Click me</button>
    </form>
  </div>
)
}


 export default App;
