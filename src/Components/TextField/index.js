
import React from 'react'

import './style.css'


const TextField = ({placeholder}) => {
  return (
    <>
      <input type="text" placeholder={placeholder} className='input-field' />
    </>
  );
}

export default TextField