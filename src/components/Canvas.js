import React from 'react';
import { ThneedContext } from '../contexts/Theed';
import { Json } from './Json';

class Canvas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ThneedContext>
				{(context) => (
					<React.Fragment>
						<Json data={context} />
					</React.Fragment>
				)}
			</ThneedContext>
		);
	}
}

export { Canvas };
