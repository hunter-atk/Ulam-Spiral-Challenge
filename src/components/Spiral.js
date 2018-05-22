import React from 'react';
import { ThneedContext } from '../contexts/Theed';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

class Spiral extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ThneedContext>
				{(context) => (
					<React.Fragment>
						<Sidebar.Pushable
							as={Segment}
							style={{
								overflow: 'hidden'
							}}
						>
							<Sidebar as={Menu} animation="push" direction="bottom" borderless visible={context.menuVisible}>
								<Menu.Item name="home">
									<Icon name="home" />
									Home
								</Menu.Item>
								<Menu.Item name="gamepad">
									<Icon name="gamepad" />
									Games
								</Menu.Item>
								<Menu.Item name="camera">
									<Icon name="camera" />
									Channels
								</Menu.Item>
							</Sidebar>
							<Sidebar
								as={Menu}
								animation="overlay"
								width="wide"
								direction="right"
								visible={context.menuVisible}
								icon="labeled"
								vertical
							>
								<Header as="h2" style={{marginTop: 20}} textAlign="center">
									<Header.Content>Console</Header.Content>
								</Header>
                                <Segment style={{textAlign: 'left'}}>
                                    <pre>
                                        <code>
                                            {JSON.stringify(context.ulamSpiral, null, 2)}
                                        </code>
                                    </pre>
                                </Segment>
							</Sidebar>
							<Sidebar.Pusher>
								<canvas
									style={{
										background: 'black',
										width: '100%',
										height: '100%',
										position: 'fixed',
										overflow: 'hidden'
									}}
								/>
							</Sidebar.Pusher>
						</Sidebar.Pushable>
					</React.Fragment>
				)}
			</ThneedContext>
		);
	}
}

export { Spiral };
