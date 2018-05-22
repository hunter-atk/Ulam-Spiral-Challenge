import React from 'react';

// import { Container, Col, Row } from 'react-grid-system';

import { ThneedProvider } from './contexts/Theed';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from './components/Header'
import { Page } from './components/Page'
import { Footer } from './components/Footer'

const App = () => {
	console.log(window.ReactRouterDOM);

	return (
    <div style={{ maxHeight: '100vh' }}>
      <ThneedProvider>
        <Header />
        <Page style={{ height: '80vh' }}/>
        <Footer />
      </ThneedProvider>
    </div>
	);
};

export default App;
