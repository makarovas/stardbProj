import React from 'react';

import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

import { withSwapiService } from '../hoc-helpers';


const StarshipDetails = (props) => {
	return (
		<ItemDetails
			{...props}>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Cost" />
		</ItemDetails >
	);
};

const mapMethodsToProps = ({ getStarship, getStarshipImage }) => {
	return {
		getData: getStarship,
		getImageUrl: getStarshipImage
	}
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);