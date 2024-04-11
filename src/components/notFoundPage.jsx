import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div>
			<h2>Error page 404. page not found</h2>
			<NavLink to="/">Go back to homepage</NavLink>
		</div>
	);
};

export default NotFoundPage;
