import React from 'react';
import { Canvas } from './components/Canvas'
import { ThneedProvider } from './contexts/Theed'
import { Dashboard } from './components/Dashboard'
import { Header, Icon, Image } from 'semantic-ui-react'

const App = () => (
  <ThneedProvider>
    <Dashboard />
    {/* <canvas></canvas>
    <Canvas />
    <ConsoleUI /> */}

  </ThneedProvider>
);


export default App;