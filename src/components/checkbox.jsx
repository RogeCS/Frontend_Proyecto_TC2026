import React from 'react';

import '../styles/components/checkbox.css';

const Checkbox = ({ children, onClick, onChange, name }) => (
  <div className='checkbox__container'>
    <input onClick={onClick} onChange={onChange} name={name} id="c1" type="checkbox" />
    <p>{children}</p>
  </div>
);

export default Checkbox;