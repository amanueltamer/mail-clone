import { Button } from '@mui/material'
import React from 'react'
import "./RecruiterMode.css"

export default function RecruiterMode(props) {
  return (
    <div className='recruiter__mode'>
        <div className="recruiter__modeContainer">
        <Button onClick={props.renderApp}>Don't want to login</Button>
        </div>
    </div>
  )
}
