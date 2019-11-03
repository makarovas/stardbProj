
import React, { Component } from 'react'
import Row from '../row';
import {
	PersonDetails,
	PlanetDetails,
	StarshipDetails,
	PersonList,
	PlanetList,
	StarshipList
} from '../sw-components';

export default class PeoplePage extends Component {
	state = {
		selectedItem: null
	}

	render() {
		return (
			<Row
				left={<PlanetDetails itemId={5} />}
				right={<PlanetList />}
			/>
		)
	}
}
