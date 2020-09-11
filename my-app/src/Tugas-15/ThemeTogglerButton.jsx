// Thanks prasetyo507

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedButton() {
  const [themes, setThemes] = useContext(ThemeContext);
  const handleClick = () => {
    setThemes(!themes);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleClick} className="primary">
        Change Theme
      </button>
    </div>
  );
}
