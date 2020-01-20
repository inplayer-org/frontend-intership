import React from 'react';

const ViewInfo = ({data}) => {
	const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
	return (
		<div>
			{data.city && <p>{data.city.name}</p>}
			{event.toLocaleDateString(undefined, options)}
			{data.list && <p>{data.list[0].weather[0].main}</p>}
		</div>
	);
};

export default ViewInfo;
