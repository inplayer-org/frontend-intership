import React from 'react';

import './temp-details.styles.scss';

const TempDetails = (props) => {
	const temp = props.days[0].temp;
	const metrics = props.metrics;
	const keys = [
		{ key: 'day', value: 'Day' },
		{ key: 'night', value: 'Night' },
		{ key: 'eve', value: 'Evening' },
		{ key: 'morn', value: 'Morning' }
	];

	return (
		<div className="temp-details">
			{keys.map(({ key, value }) => {
				return (
					<p key={key}>
						{`${value}: `}
						{metrics === '°F' ? (
							Number((temp[key] * 9 / 5 + 32).toFixed(0))
						) : (
							Number(temp[key].toFixed(0))
						)}
						{metrics}
					</p>
				);
			})}
		</div>
	);
};

export default TempDetails;
