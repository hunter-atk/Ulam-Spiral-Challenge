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
						<p>{context.runSesh}</p>
						<ShowJson data={context} />
                        <button onClick={() => {
							context.spiralInit()
						}}>Click away</button>
					</React.Fragment>
				)}
			</ThneedContext>
		);
	}
}

export { Canvas };
