import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MyInfo from './MyInfo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<MyInfo />,
 document.getElementById('root'));

 serviceWorker.unregister();
