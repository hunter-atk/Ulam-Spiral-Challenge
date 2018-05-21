import React from 'react';
import { Canvas } from './components/Canvas';
import { ThneedProvider } from './contexts/Theed';

const App = () => (
  <ThneedProvider>
    <h2>here</h2>
    <canvas></canvas>

    <Canvas />
  </ThneedProvider>
);


export default App;