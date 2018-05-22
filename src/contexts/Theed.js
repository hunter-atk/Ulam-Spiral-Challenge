import React, { Component } from 'react';

const ThneedContext = React.createContext({});

class ThneedProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ulamSpiral: {
				rotations: 0,
				count: 0,
				length: 1,
			},
			menuVisible: false,
			toggleVisibility: () => this.setState({ menuVisible: !this.state.menuVisible }),
			consoleVisible: false,
			toggleConsole: () => this.setState({ consoleVisible: !this.state.consoleVisible }),

		}
	}

	render() {
		return <ThneedContext.Provider value={this.state}>{this.props.children}</ThneedContext.Provider>;
	}
}

export { ThneedProvider, ThneedContext };
