// import React, { Component } from 'react'

// export default class Some extends Component {
// 	constructor(props) {
// 		super(props);
// 	}



// 	fetchingApi() {
// 		fetch('https://swapi.co/api/people/1/')
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((body) => {
// 				console.log(body)
// 			})
// 	}

// 	componentDidMount() {
// 		this.fetchingApi();
// 	}


// 	render() {
// 		return (
// 			<div>
// 				hello world
// 			</div>
// 		)
// 	}
// }


const getResource = async (url) => {
	const res = await fetch(url);
	const body = await res.json();
	return body;
}

getResource('https://swapi.co/api/people/1/')
	.then((body) => {
		console.log(body)
	})