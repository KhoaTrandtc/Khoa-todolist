import React from 'react'
import './Container1.css'
import Focuszone from '../Focuszone/Focuszone'
import Timer from '../Timer/Timer'
import Music from '../Music/Music'
const Container1 = ({ todos }) => {
  return (
    <div className='container bg-light p-4 mt-5 rounded-3 shadow-lg'>
      <Focuszone todos={todos} />
      <Timer />
      <Music />
    </div>
  )
}

export default Container1