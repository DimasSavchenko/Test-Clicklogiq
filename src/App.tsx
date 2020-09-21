import React from 'react';
import { configure } from 'mobx';
import { HashRouter as Router } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';

import { ErrorBoundary } from './containers/ErrorBoundary/ErrorBoundary';
import { StoreProvider } from './stores/StoreProvider';
import { default as AppModuleCss } from './App.module.css';
import { Main } from './containers/Main/Main';

bemCssModules.setSettings({
	modifierDelimiter: '--',
	throwOnError: true,
});

configure({ enforceActions: 'observed' });

const block = bemCssModules(AppModuleCss);

export const App: React.FC = () => (
	<ErrorBoundary>
		<div className={block()}>
			<StoreProvider>
				<Router>
					<Main />
				</Router>
			</StoreProvider>
		</div>
	</ErrorBoundary>
);
