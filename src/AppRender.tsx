import ReactDOM from 'react-dom';
import React from 'react';

import { App } from './App';

export const render = (): void => {
	const rootEl = document.getElementById('images-database-root');
	ReactDOM.render(<App />, rootEl);
};
