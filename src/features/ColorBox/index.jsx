import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};
function getRandomColor() {
  const COLOR_LIST = ["Blue", "Red", "Green", "Black"];
  const RandomIndex = Math.trunc(Math.random() * 4);
  return COLOR_LIST[RandomIndex];
}
function ColorBox() {
  const [color, setColor] = useState(
    () => localStorage.getItem("box_color") || "red"
  );
  function ClickColor() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={ClickColor}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
