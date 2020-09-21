import { PhotosCollectionStore } from './PhotosCollectionStore';

export class RootStore {
	photosCollectionStore: PhotosCollectionStore;

	constructor() {
		this.photosCollectionStore = new PhotosCollectionStore(this);
	}
}
