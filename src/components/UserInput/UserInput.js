import React from "react";
import './UserInput.css';

const userinput = (props) => {
  return (
    <div className="typed">
      <label>Usuario: </label>
      <input type="text" onChange={props.changed} value={props.username}/>
    </div>
    )
}

export default userinput;