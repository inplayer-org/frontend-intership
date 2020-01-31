import React from 'react'
import './currentlocation.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addLocation, toggleErrorMessage } from '../../redux/home/home.actions'




const CurrentLocation = ({history,addLocation}) =>( 

    <span className="text" >use my <b className="link" onClick={
        () => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    history.push(`forecast?lat=${lat}&lon=${lon}`);
                   addLocation(lat,lon)
                },
                () => toggleErrorMessage()
            );
        }
    }>current location</b></span>
)

const mapDispatchToProps = {
    addLocation: addLocation
}
export default connect(null,mapDispatchToProps)(withRouter(CurrentLocation))
