import React from 'react';
import { StyleRoot } from 'radium';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StyleRoot><App /></StyleRoot>, document.getElementById('root'));
registerServiceWorker();
