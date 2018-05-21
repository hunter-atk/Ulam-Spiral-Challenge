import React from 'react'
import { ThneedContext } from '../contexts/Theed'
import { ShowJson } from './ShowJson'
import { Header, Icon } from 'semantic-ui-react'

const ConsoleUI = () => (
    <ThneedContext>
        {(context) => (
            <React.Fragment>
                <Header as='h2' icon textAlign='center'>
                <Icon name='cogs' circular />
                <Header.Content>
                  Console
                </Header.Content>
                </Header>
            <ShowJson data={context.ulamSpiral} />

            </React.Fragment>
            
        )}
    </ThneedContext>
)

export { ConsoleUI }