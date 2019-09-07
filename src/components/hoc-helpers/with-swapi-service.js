import React from 'react';

import { SwapiServiceConsumer } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

const withSwapiService = (Wrapped) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
				{
					(swapiService) => {
						return (
							<Wrapped {...props}
								swapiService={swapiService}
							/>
						)
					}
				}
			</SwapiServiceConsumer>
		)
	}
}

export default withSwapiService;