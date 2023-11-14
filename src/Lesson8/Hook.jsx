import React, { useState } from "react";
import { Textbutton } from "./style";
// import './style.js'
const Hook = (props) => {
  const [count, setCount] = useState(10);
  // console.log(state);
  const [name, SetName] = useState("Webbrain");
  console.log(SetName);
  return (
    <div>
      <h1>Hooks</h1>
      <p>Counts {count} </p>
      <Textbutton onClick={() => setCount(count + 1)}>+</Textbutton>

      <p>Name: {name}</p>
      <input type="text" value={name} onChange={({target})=>SetName(target.value)} />
    </div>
  );
};

export default Hook;
