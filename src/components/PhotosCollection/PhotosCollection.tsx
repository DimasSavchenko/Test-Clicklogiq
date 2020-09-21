import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';

import { IPhoto } from '../../models/IPhoto';
import { PhotosCollectionItem } from '../PhotosCollectionItem/PhotosCollectionItem';
import { default as PhotosCollectionModuleCss } from './PhotosCollection.module.css';

interface IPhotosCollectionProps {
	photosCollection: IPhoto[];
}

const block = bemCssModules(PhotosCollectionModuleCss);

export const PhotosCollection = ({
	photosCollection,
}: IPhotosCollectionProps) => {
	return (
		<ul className={block()}>
			{photosCollection.map((item: IPhoto) => (
				<PhotosCollectionItem
					key={`${item.Name}-${item.Modified}`}
					item={item}
				/>
			))}
		</ul>
	);
};
