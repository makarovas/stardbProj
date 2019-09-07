import React from 'react';

import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';


const PlanetDetails = (props) => {
	return (
		<ItemDetails
			{...props}

			<Record field="population" label="Population" />
		<Record field="rotationPeriod" label="Rotation Period" />
		<Record field="diameter" label="Diameter" />
		</ItemDetails >
	);
};

const mapMethodsToProps = ({ getPlanet, getPlanetImage }) => {
	return {
		getData: getPlanet,
		getImageUrl: getPlanetImage
	}
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);