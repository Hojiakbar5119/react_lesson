import React, { useState } from "react";
import Navbar from "./Navbarw";
import { Counterss } from "./style";

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar data={{ title: "Webbrain Academy" }} />
      <Counterss>
        <h1>Counter {count} </h1>
        <button onClick={() => setCount(count + 1)}>
          <h2>Plus</h2>
        </button>
      </Counterss>
    </div>
  );
};

export default Hooks;
