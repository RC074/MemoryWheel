import React from "react";

const Memory = ({ mem, index }) => {
  return (
    <div
      style={
        !(index % 2 === 0)
          ? { backgroundImage: `url(${mem.imgb64})`, zIndex: 2 }
          : {}
      }
      id={`slide${index}`}
      className="slide"
    >
      <div className="title">
        <h1>{mem.title}</h1>
        <p>{mem.content}</p>
      </div>
      {index % 2 === 0 ? (
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `#slide${index}:before {`,
              `background-image: url(${mem.imgb64});`,
              "transform: translateZ(-1px) scale(2);",
              "z-index: -1",
              "}",
            ].join("\n"),
          }}
        ></style>
      ) : (
        ""
      )}
    </div>
  );
};

export default Memory;
