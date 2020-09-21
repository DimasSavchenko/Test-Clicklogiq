import React from 'react';

import { StoreContext } from './StoreProvider';
import { RootStore } from './RootStore';
import { PhotosCollectionStore } from './PhotosCollectionStore';

const useRootStore = (): RootStore => {
	const rootStore = React.useContext(StoreContext);
	if (!rootStore) {
		throw new Error('Missing RootStore provider');
	}

	return rootStore;
};

export const usePhotosCollectionStore = (): PhotosCollectionStore => {
	const rootStore = useRootStore();

	return rootStore.photosCollectionStore;
};
