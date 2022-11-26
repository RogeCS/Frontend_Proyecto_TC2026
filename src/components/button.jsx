import React from 'react';

import "../styles/components/button.css";

const Button = ({ type, value }) => (
  <input className='btn__send' type={type} value={value} /> 
);

export default Button;