import React from 'react';

import "../styles/components/button.css";

const Button = ({ type, value, onSubmit }) => (
  <input className='btn__send' type={type} value={value} onSubmit={onSubmit} /> 
);

export default Button;