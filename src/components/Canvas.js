import React from 'react';
import { ThneedContext } from '../contexts/Theed';
import { ShowJson } from './ShowJson';

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
					</React.Fragment>
				)}
			</ThneedContext>
		);
	}
}

export { Canvas };
