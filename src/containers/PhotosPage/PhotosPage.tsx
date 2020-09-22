import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useAsyncEffect } from 'use-async-effect';
import { default as bemCssModules } from 'bem-css-modules';

import { PhotosCollectionStore } from '../../stores/PhotosCollectionStore';
import { usePhotosCollectionStore } from '../../stores/hooks';
import { Loader } from '../../components/Loader/Loader';
import { PhotosCollection } from '../../components/PhotosCollection/PhotosCollection';
import { SortType } from '../../models/SortType';
import SortButton from '../../components/SortButton/SortButton';
import { default as PhotosPageModuleCss } from './PhotosPage.module.css';

const block = bemCssModules(PhotosPageModuleCss);

const PhotosPage: React.FC = () => {
	const [isLoaded, setIsLoaded]: [boolean, Function] = useState(false);
	const {
		sortType,
		setSortType,
		getSortedPhotosCollection,
		loadPhotosCollection,
	}: PhotosCollectionStore = usePhotosCollectionStore();

	useAsyncEffect(async (): Promise<void> => {
		await loadPhotosCollection();
		setIsLoaded(true);
	}, []);

	const handlerSortChange = (sortName: SortType) => {
		setSortType(sortName);
	};

	if (!isLoaded) {
		return <Loader />;
	}

	return (
		<div className={block()}>
			<h1>Photos</h1>
			<div className={block('buttons')}>
				<SortButton
					onSortChange={handlerSortChange}
					sortName={SortType.Name}
					selected={sortType === SortType.Name ? 'selected' : ''}
				/>
				<SortButton
					onSortChange={handlerSortChange}
					sortName={SortType.Size}
					selected={sortType === SortType.Size ? 'selected' : ''}
				/>
				<SortButton
					onSortChange={handlerSortChange}
					sortName={SortType.Modified}
					selected={sortType === SortType.Modified ? 'selected' : ''}
				/>
			</div>
			<PhotosCollection
				photosCollection={getSortedPhotosCollection(sortType)}
			/>
		</div>
	);
};

export default observer(PhotosPage);
