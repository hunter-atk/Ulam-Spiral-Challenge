import React from 'react';

import { Container, Col, Row } from 'react-grid-system'

import { ThneedProvider } from './contexts/Theed'

const App = () => (
  <ThneedProvider>
    <p>in app</p>
  </ThneedProvider>
);

export default App;
