import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

import * as serviceWorker from './serviceWorker';

/* function App () {
	const date = new Date(2019, 7, 23, 20);
	const hours = date.getHours();
	let timeOfDay;
	const styles = {
		backgroundColor: "yellow",
		fontSize: "43px"
	}

if (hours < 12) {
	timeOfDay = "morning"
} else if (hours >= 12 && hours < 17) {
	timeOfDay = "afternoon"
} else {
	timeOfDay = "night";
	styles.backgroundColor = "purple";
}

	return (
		<h1 style={styles}>Good {timeOfDay}</h1>
	)
} */

ReactDOM.render(
<App />,
document.getElementById('root')
);

serviceWorker.unregister();
