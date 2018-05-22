import React from 'react';
import { Button, Menu, Icon, Container } from 'semantic-ui-react';
import { ThneedContext } from '../contexts/Theed';

const Header = (props) => {
	return (
		<ThneedContext>
			{(context) => (
				<Container>
					<Menu borderless text>
						<Menu.Item>
							<Icon.Group>
								<Icon loading size="big" name="repeat" />
							</Icon.Group>
						</Menu.Item>
						<Menu.Item>
							<h1>Ulams Spiral</h1>
						</Menu.Item>
						<Menu.Menu position="right">
							<Menu.Item>
								<Button animated onClick={context.toggleVisibility}>
									<Button.Content hidden>Console</Button.Content>
									<Button.Content visible>
										<Icon name="terminal" />
									</Button.Content>
								</Button>
							</Menu.Item>
						</Menu.Menu>
					</Menu>
				</Container>
			)}
		</ThneedContext>
	);
};

export { Header };
