import React, { Component } from 'react';

const ThneedContext = React.createContext({});

class ThneedProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			test: "here",
			ulamSpiral: {
				rotations: 0,
				count: 0,
				length: 1,
			},
		}
	}

	render() {
		return <ThneedContext.Provider value={this.state}>{this.props.children}</ThneedContext.Provider>;
	}
}

export { ThneedProvider, ThneedContext };
