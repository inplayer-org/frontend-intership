import React from 'react';

import './card-list.styles.scss';

import Card from '../card/card.component';

const CardList = (props) => {
	console.log(props.forecast.list);
	return (
		<div className="card-list">
			{props.forecast.list.map((day) => <Card key={day.dt} day={day} />)}
		</div>
	);
};

export default CardList;
