import React from "react";
import './UserInput.css';

const userinput = (props) => {
        return (
            <input type="text" onChange={props.changed} defaultValue={props.username}/>
        )
}

export default userinput;