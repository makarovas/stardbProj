import React from 'react';
import './spinner.css';
const Spinner = () => {
	return (
		<div style={
			{
				position: 'relative',
				width: '100%',
				textAlign: "center",
				display: 'inline-block',
				verticalAlign: 'middle',
				margin: '0 auto',
				left: '40%'
			}
		}>
			< div className="lds-css ng-scope" > <div className="lds-double-ring"><div></div><div></div><div><div></div></div><div><div></div></div></div> </div>
		</div>

	);
};

export default Spinner;