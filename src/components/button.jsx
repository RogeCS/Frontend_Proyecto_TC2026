import React from 'react';

import "../styles/components/button.css";

const Button = ({ type, value, onClick }) => (
  <input className='btn__send' type={type} value={value} onClick={onClick} /> 
);

export default Button;