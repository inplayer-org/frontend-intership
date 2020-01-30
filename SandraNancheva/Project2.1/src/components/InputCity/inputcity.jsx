import React from 'react';
import './inputcity.scss'
import { connect } from 'react-redux'

const InputCity = (props) => ( 
	<div className="inputform">
		<form onSubmit={props.handleSubmit}>
			<input className="input" type="text" onChange={props.handleChange} placeholder="City" />
		</form>
	</div>
)
const mapDispatchToProps()

export default connect(null,mapDispatchToProps) (InputCity);
