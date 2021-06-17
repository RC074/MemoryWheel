import React from "react";
import Bg from "../../images/header1.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      id="title"
      className="slide header"
    >
      <h1>Memory Wheel</h1>
    </div>
  );
};

export default Header;
