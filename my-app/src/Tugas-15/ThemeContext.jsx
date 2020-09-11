// Thanks prasetyo507

import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
  const [themes, setThemes] = useState(false);

  return (
    <ThemeContext.Provider value={[themes, setThemes]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
