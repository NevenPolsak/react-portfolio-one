import React from "react";
import "./Toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";

import { ThemeContext } from "./../../context";

function Toggle() {
  const theme = useContext(ThemeContext);
  
  const handleClick = () =>{
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className="toggle">
      <img className="toggle-icon" src={Sun} />
      <img className="toggle-icon" src={Moon} />
      <div className="toggle-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}}></div>
    </div>
  );
}

export default Toggle;
