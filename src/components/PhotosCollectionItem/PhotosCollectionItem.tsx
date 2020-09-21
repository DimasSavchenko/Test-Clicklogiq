import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';

import { IPhoto } from '../../models/IPhoto';
import { default as PhotosCollectionItemModuleCss } from './PhotosCollectionItem.module.css';

interface IPhotosCollectionItemProps {
	item: IPhoto;
}

const block = bemCssModules(PhotosCollectionItemModuleCss);

export const PhotosCollectionItem = ({ item }: IPhotosCollectionItemProps) => {
	return (
		<li className={block()}>
			<img src={item.URL} alt="photo image" />
			<p className={block('name')}>
				<span className={block('name', { bold: true })}>Author: </span>
				{item.Name}
			</p>
			<p className={block('size')}>{item.Size}</p>
		</li>
	);
};
