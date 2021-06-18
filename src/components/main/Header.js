import React, { useEffect, useState } from "react";
import Bg1 from "../../images/header1.jpg";
import Bg2 from "../../images/header2.jpg";
import Bg3 from "../../images/header3.jpg";
import Bg4 from "../../images/header4.jpg";

let i = 0;

const Header = () => {
  const backgrounds = [Bg1, Bg2, Bg3, Bg4];
  const [activeIndex, SetActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(i);
      if (i === 3) {
        i = 0;
        SetActiveIndex(0);
      } else {
        i++;
        SetActiveIndex((activeIndex) => activeIndex + 1);
      }
    }, 5000);
    return () => {
      console.log("clean up");
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds[activeIndex]})`,
        transition: "background-image 1s ease-in-out",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      id="title"
      className="slide header"
    >
      <h1>Memory Wheel</h1>
    </div>
  );
};

export default Header;
