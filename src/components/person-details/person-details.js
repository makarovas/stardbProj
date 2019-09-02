import React, { Component } from 'react';
import Spinner from './../spinner/spinner';
import './person-details.css';
import SwapiService from './../../services/swapi-service';

export default class PersonDetails extends Component {
	swapiService = new SwapiService();

	state = {
		person: null,
		loading: true
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId)
		{
			this.updatePerson()
		}
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId)
		{
			return;
		}
		this.swapiService
			.getPerson(personId)
			.then((person) => {
				this.setState({
					person
				})
			})
	}

	onPersonLoaded = (personId) => {
		this.setState({
			personId, loading: false
		});
	}


	render() {
		if (!this.state.person)
		{
			return (
				<span> select a person from a list, please</span>
			)
		}

		const { person: {
			id, name, gender, birthYear, eyeColor,
		}, loading } = this.state;
		return (
			<div className="person-details card">
				<img className="person-image"
					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
					alt='img'
				/>

				<div className="card-body">
					<h4>{name.toString().toUpperCase()}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
