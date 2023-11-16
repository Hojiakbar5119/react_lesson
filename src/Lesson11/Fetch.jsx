import React, { useState, useEffect } from "react";
const Fetch = () => {
  const [student, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setStudents(res);
      });
  }, []);

  return (
    <div>
      <h1>Students list</h1>
      <p>Talabalar ro'yxati </p>

    <ul>
    {student.map((value)=>{
        return <li key={value.id}>{value.id}. {value.name}</li>
      })}
    </ul>

      {/* <button onClick={()=>{setCounter(+1)}}>Plus degrees</button> */}
    </div>
  );
};

export default Fetch;
