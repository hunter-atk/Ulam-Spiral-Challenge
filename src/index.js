import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'


ReactDOM.render(
	<div>
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
		<App />
	</div>,
	document.getElementById('root')
);
registerServiceWorker();
