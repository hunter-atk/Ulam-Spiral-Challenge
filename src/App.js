import React from 'react';
import { Canvas } from './components/Canvas';
import { ThneedProvider } from './contexts/Theed';

const App = () => (
  <ThneedProvider>
    <Canvas />
  </ThneedProvider>
);


export default App;