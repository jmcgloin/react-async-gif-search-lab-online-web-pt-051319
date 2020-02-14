import  React, {Component} from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key=Z0tvOdml9D1yEyDj11nTdUNf62bleShz&limit=3&offset=0&rating=G&lang=en&q='

export default class GifListContainer extends Component {
	
	state = ({
		query: "",
		gifs: []
	})

	handleSubmit = (data) => {
		this.handleFetch(BASE_URL + data.get('query'))
	}

	handleFetch = (query) => {
		fetch(BASE_URL + query)
		.then(r => r.json())
		.then(rj => this.setState({gifs: rj.data.map(img => img.images.fixed_height.url)}))
	}

	render() {
		return (
			<React.Fragment>
				<GifSearch handleSubmit={this.handleSubmit} />
				<GifList gifs={this.state.gifs} />
			</React.Fragment>
		)
	}
}