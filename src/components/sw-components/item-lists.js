import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import { getSnapshotData } from 'jest-snapshot/build/utils';


const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

cosnt mapPersonMethodsToprops = (swapiService) => {
  getData: swapiService.getAllPeople,

}

cosnt mapStarshipsMethodsToprops = (swapiService) => {
  getData: swapiService.getAllStarships,
  
}

cosnt mapPlanetsMethodsToprops = (swapiService) => {
  getData: swapiService.getAllPlanets,
  
}
const PersonList = withSwapiService(withData(
  withChildFunction(ItemList, renderName),
), mapPersonMethodsToprops)



const PlanetList = withData(
  withChildFunction(ItemList, renderName),
);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
);

export {
  PersonList,
  PlanetList,
  StarshipList
};
