import React from 'react';
import { connect } from "react-redux";
import './inputcity.scss'
import { withRouter } from 'react-router-dom'
import { addCity } from '../../redux/home/home.actions'

const InputCity = ({handleChange, city, history, addCity}) => ( 
	<div className="inputform">
		<form onSubmit={
			()=> {
				history.push(`forecast?city=${city}`);
				addCity(city)	
			}}>
			<input className="input" type="text" onChange={handleChange} placeholder="City" />
		</form>
	</div>
)
const mapDispatchToProps = {
	addCity: addCity
}

export default connect(null, mapDispatchToProps)(withRouter(InputCity));
