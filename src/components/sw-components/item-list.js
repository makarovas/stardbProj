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



const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarShipDetails = withData(ItemList, getAllStarships);

export {
	PersonList,
	PlanetList,
	StarShipDetails,
};