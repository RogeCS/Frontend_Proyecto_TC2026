import React from "react";

import "../styles/components/input.css";

const Input = ({
    label,
    type, 
    value, 
    onChange, 
    placeholder = '', 
    name, 
    id 
  }) => (

  <label className="input">
    <input className="input__field" type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} id={id} />
    <span className="input__label">{label}</span>
  </label>

  
);

export default Input;       