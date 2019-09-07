import React, { Fragment } from 'react';

import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

import PlanetDetails from './planet-details';
import StarshipDetails from './starship-details';
import PersonDetails from './person-details';

const Details = () => {
  return (
    <Fragment>
      <PlanetDetails />
      <StarshipDetails />
      <PersonDetails />
    </Fragment>
  )
}



export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
