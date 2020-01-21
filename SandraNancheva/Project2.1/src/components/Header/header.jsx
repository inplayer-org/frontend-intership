import React from 'react';
import { Link } from 'react-router-dom';
import ViewInfo from '../ViewInfo/viewinfo';
import './header.scss';

const Header = ({ data, handleTemp, units }) => {
	return (
		<div className="header">
			<div className="top">
				<div>
					<Link to="/">Home Page</Link>
					{data.city && <p>{data.city.name}</p>}
				</div>
				<div>
					<button onClick={handleTemp}>{units === 'metric' ? 'C' : 'F'}</button>
				</div>
			</div>
			<div className="bottom">
				<ViewInfo data={data} />
			</div>
		</div>
	);
};

export default Header;
