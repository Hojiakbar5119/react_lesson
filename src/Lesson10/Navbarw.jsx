import React from "react";
import { Navbars } from "./style";

const Navbar = (props) => {
  return (
    <div>
      <Navbars>
        <h1>{props.data.title}</h1>
        <h1>Menu</h1>
        <h1>Action</h1>
        <h1>Contact</h1>
      </Navbars>
    </div>
  );
};

export default Navbar;
