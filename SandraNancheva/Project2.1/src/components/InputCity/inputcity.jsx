import React from 'react';
import './inputcity.scss'

const InputCity = (props) => ( 
	<div className="inputform">
		<form onSubmit={props.handleSubmit}>
			<input className="input" type="text" onChange={props.handleChange} placeholder="City" />
		</form>
	</div>
)

export default InputCity;
