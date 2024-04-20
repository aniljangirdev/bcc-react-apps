//#ffffff// hascode
//rgb(11,55,33)

import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandomUtils(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let index = 0; index < 6; index++) {
      hexArr += hexArr[RandomColor(hexArr.length)];
    }

    console.log(`colors ${hexColor}`);

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor(color) {}

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
      <button>Create RGB color</button>
      <button onClick={() => handleCreateRandomHexColor()}>
        Generate Random Color
      </button>
    </div>
  );
}
