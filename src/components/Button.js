import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({label, onClick}) => {
  return (
    <button className='btn btn-primary' onClick={onClick}>{label}</button>
  )
}
export default Button;