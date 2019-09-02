import React, { Component } from 'react';
import './people-page';
import PersonDetails from '../person-details/person-details';
import ItemList from '../item-list/item-list';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';


export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: 3,
		hasError: false
	}

	componentDidCatch(error, info) {
		debugger;
		this.setState({
			hasError: true
		})
	}


	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	};

	render() {
		if (this.state.hasError)
		{
			return <ErrorIndicator />
		}
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList
						onItemSelected={this.onPersonSelected}
						getData={this.swapiService.getAllPeople}
						renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
					/>
				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.selectedPerson} />
				</div>
			</div>
		)
	}
}