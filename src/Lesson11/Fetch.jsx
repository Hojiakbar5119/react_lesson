import React, { useState, useEffect } from "react";
const Fetch = () => {
  const [student, setStudents] = useState([]);
  const [select, setSelected] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "Get" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setStudents(res);
      });
  }, []);

  const getinfo=(id)=>{
    console.log(id);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: "Get" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSelected(res);
      });

  }
  return (
    <div>
      <h1>Students list</h1>
      <p>Talabalar ro'yxati </p>

      <ul>
        {student.map((value) => {
          return (
            <li key={value.id}>
              {value.id}. {value.name}
              <button onClick={()=>{getinfo(value.id)}}>get Info</button>
            </li>
          );
        })}
      </ul>
     <div key={select.id}>
     <h3>
        Qo'shimcha malumotlar
      </h3>
      <p>Username: {select.username} </p>
      <p>Adress: {select.id} </p>
     </div>

      {/* <button onClick={()=>{setCounter(+1)}}>Plus degrees</button> */}
    </div>
  );
};

export default Fetch;
