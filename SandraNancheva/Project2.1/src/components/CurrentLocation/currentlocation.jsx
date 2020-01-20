import React from 'react'
import './currentlocation.scss'


const CurrentLocation = (props) =>( 

    <span className="text" >use my <b className="link" onClick={props.handleClick}>current location</b></span>
)

export default CurrentLocation