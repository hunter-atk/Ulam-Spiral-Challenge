import React from 'react';
import { Button, Segment, Container } from 'semantic-ui-react';
import { Spiral } from './Spiral'


const Page = (props) => (
	<Container {...props}>
		<Spiral />
	</Container>
);

export { Page };
