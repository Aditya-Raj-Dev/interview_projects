import React from 'react'
import '../App.css'
import Checkbox from './Checkbox'
const Checked = () => {
  return (
    <div className='checked'>
      <Checkbox  lm="main check 1" l1="no 1" l2="no 2" l3="no 3" />
      <Checkbox  lm="main check 2" l1="no 1" l2="no 2" l3="no 3"/>
      <Checkbox  lm="main check 3" l1="no 1" l2="no 2" l3="no 3"/>
      <Checkbox  lm="main check 4" l1="no 1" l2="no 2" l3="no 3"/>
    </div>
  )
}

export default Checked