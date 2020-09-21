import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';

import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { Routes } from '../Routes/Routes';
import { default as MainModuleCss } from './Main.module.css';

const block = bemCssModules(MainModuleCss);

export const Main = () => (
	<div className={block()}>
		<NavigationBar />
		<Routes />
	</div>
);
