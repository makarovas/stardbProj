import React from 'react';
import IteList from '../item-list';

import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import './item-list.css';
import ItemList from '../item-list';
import { PlanetDetails } from '.';

const SwapiService = new SwapiService();
const {
	getAllPeople,
	getAllStarships,
	getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
	return (props) => {
		return (
			<Wrapped {...prosp}>
				{fn)}
			</Wrapped>
		)
	}
};


const ListWithChildren = withChildFunction(
	itemList,
	({ name }) => <span>{name}</span>

)
const PersonList = withData(ListWithChildren, getAllPeople);
const PlanetList = withData(ListWithChildren, getAllPlanets);
const StarShipDetails = withData(ListWithChildren, getAllStarships);

export {
	PersonList,
	PlanetList,
	StarShipDetails,
};