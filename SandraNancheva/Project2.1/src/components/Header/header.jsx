import React from 'react';
import { Link } from 'react-router-dom';
import ViewInfo from '../ViewInfo/viewinfo';


const Header = ({ data, handleTemp, units }) => {
	const theCity = data.city;
	console.log(data);

	return (
		<div>
			<button onClick={handleTemp}>{units === 'metric' ? 'C' : 'F'}</button>
			<Link to="/">Home Page</Link>
			<ViewInfo data={data} />
			
		</div>
	);
};

export default Header;
