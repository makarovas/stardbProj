import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
	return (
		<div
			className='error-indicator'>
			<img
				style={{
					height: '200px',

				}}
				src={icon} alt='error' />
			<span className='boom'>OOps =)</span>
			<span>something going wrong</span>
			<span>but we work on it!!</span>
		</div>
	);
};

export default ErrorIndicator;