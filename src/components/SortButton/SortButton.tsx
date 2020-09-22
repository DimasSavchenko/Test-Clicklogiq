import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';

import { SortType } from '../../models/SortType';
import { default as SortButtonModuleCss } from './SortButton.module.css';

interface ISortButtonProps {
	onSortChange: Function;
	sortName: SortType;
	selected: string;
}

const block = bemCssModules(SortButtonModuleCss);

const SortButton = ({ onSortChange, sortName, selected }: ISortButtonProps) => {
	const handlerSortChange = () => {
		onSortChange(sortName);
	};

	return (
		<button
			onClick={handlerSortChange}
			className={selected ? block({ selected: true }) : block()}
		>
			{sortName}
		</button>
	);
};

export default SortButton;
