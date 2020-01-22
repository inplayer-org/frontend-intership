import React from 'react';

import './card-list.styles.scss';

import Card from '../card/card.component';

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.forecast.list.filter((day, i) => (i > 0)).map((day) => <Card key={day.dt} day={day} {...props} />)}
		</div>
	);
};

export default CardList;
