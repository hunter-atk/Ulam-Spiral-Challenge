import React from 'react';
import { Menu, Container } from 'semantic-ui-react';


const Footer = (props) => (
    <Container>
        <Menu borderless text>
            <Menu.Item style={{ opacity: '0.3' }}  position='right'>
                &copy; 2018
            </Menu.Item>
        </Menu>
    </Container>

);

export { Footer };
