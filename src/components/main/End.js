import React from "react";

const End = ({ history }) => {
  console.log(history);

  const handleClick = () => {
    console.log("hi");
    history.push("/create");
  };

  return (
    <div id="end" className="slide header">
      <h1>The End</h1>
      <div style={{ fontSize: "100px" }}>
        <div
          className="fas fa-plus-circle"
          style={{ position: "relative", zIndex: 10 }}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
};

export default End;
