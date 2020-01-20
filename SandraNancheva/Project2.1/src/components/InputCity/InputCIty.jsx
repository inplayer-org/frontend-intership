import React from 'react';

import { withRouter } from 'react-router-dom';

const InputCity = (props) => ( 
	<div>
		<form onSubmit={props.handleSubmit}>
			<input type="text" onChange={props.handleChange} />
		</form>
	</div>
)

export default withRouter(InputCity);
