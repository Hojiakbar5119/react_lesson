import React, { useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count {count} </h1>
    </div>
  );
};
export default Content;
