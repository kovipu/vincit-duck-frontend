import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const server = 'http://' + window.location.hostname + ':8081'

ReactDOM.render(<App server={server} />, document.getElementById('root'));
registerServiceWorker();
