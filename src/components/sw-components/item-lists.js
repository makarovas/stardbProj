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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  }

}

const mapStarshipsMethodsTopProps = (swapiService) => {
  return {
  }
}

const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  }
}
const PersonList = withSwapiService(withData(
  withChildFunction(ItemList, renderName),
), mapPersonMethodsToProps)

const PlanetList = withSwapiService(withData(
  withChildFunction(ItemList, renderName),
), mapPermapPlanetsMethodsToPropssonMethodsToProps)

const StarshipList = withSwapiService(withData(
  withChildFunction(ItemList, renderName),
), mapStarshipsMethodsTopProps)

export {
  PersonList,
  PlanetList,
  StarshipList
};
