
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
			<div>
				<Row
					left={<PersonList />}
					right={<PersonDetails itemId={11} />}
				/>
			</div>
		)
	}
}
