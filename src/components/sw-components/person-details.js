import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';


const PersonDetails = (props}) => {
	return (
		<ItemDetails
			{...props}
			<Record field="gender" label="Gender" />
		<Record field="eyeColor" label="Eye Color" />
		</ItemDetails >
	);
};

const mapMethodsToProps = ({ getPerson, getPersonImage }) => {
	return {
		getData: getPerson,
		getImageUrl: getPersonImage

	}
}

export default withSwapiService(PersonDetails, mapMethodsToProps);