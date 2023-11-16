import React, { useState } from "react";

const Content = () => {
  const [count, setCount] = useState(Number(localStorage.getItem('count')));
  const plus = ()=>{
    localStorage.setItem('count',count+1)
    setCount(count+1)
    // console.log(e.target);
  }
  const minus = ()=>{
    localStorage.setItem('count',count-1)
    setCount(count-1)
    // console.log(e.target);
  }
  return (
    <div>
      <p>Local Storage haqida ishlashni o'rganamiz</p>
      <h1>Count {count} </h1>
      <button onClick={plus} >plus</button>
      <button onClick={minus} >minus</button>
    </div>
  );
};
export default Content;


// !  endi localc storage haqida to'liq o'rganish kerak ekanda 
