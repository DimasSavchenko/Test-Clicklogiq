import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';

import { SortType } from '../../models/SortType';
import { default as SortButtonModuleCss } from './SortButton.module.css';

interface ISortButtonProps {
	onSortChange: Function;
	sortName: SortType;
}

const block = bemCssModules(SortButtonModuleCss);

const SortButton = ({ onSortChange, sortName }: ISortButtonProps) => {
	const handlerSortChange = (sortName: SortType) => {
		onSortChange(sortName);
	};

	return (
		<button onClick={() => handlerSortChange(sortName)} className={block()}>
			{sortName}
		</button>
	);
};

export default SortButton;
