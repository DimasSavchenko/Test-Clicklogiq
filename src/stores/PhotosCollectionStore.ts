import { action, observable, runInAction } from 'mobx';

import { BaseStore } from './BaseStore';
import { IAjaxResponse } from '../models/IAjaxResponse';
import { IPhotosCollection } from '../dtos/IPhotosCollection';
import { IPhoto } from '../models/IPhoto';
import { SortType } from '../models/SortType';

export class PhotosCollectionStore extends BaseStore {
	@observable
	photosCollection: IPhoto[] = [];

	@observable
	sortType: SortType = SortType.Name;

	@action
	setSortType = (sortType: SortType): void => {
		this.sortType = sortType;
	};

	@action
	loadPhotosCollection = async (): Promise<IAjaxResponse<
		IPhotosCollection
	> | null> => {
		const url = `/imagesDatabase`;
		const response = await this.getUrl<IPhotosCollection>(url);

		if (!response) {
			return null;
		}

		if (response.error) {
			runInAction((): void => {
				this.networkError = response.error;
			});
		}

		if (response.data) {
			const { Collection } = response.data;
			runInAction((): void => {
				this.photosCollection = Collection;
			});
		}

		return response;
	};

	@action
	getSortedPhotosCollection = (sortType: SortType) => {
		const visibleCollection = [...this.photosCollection];

		switch (sortType) {
			case 'Name':
				visibleCollection.sort((a, b) =>
					a[sortType].localeCompare(b[sortType]),
				);
				break;
			case 'Size':
				visibleCollection.sort((a, b) => parseInt(a.Size) - parseInt(b.Size));
				break;
			case 'Modified':
				visibleCollection.sort(
					(a, b) => Date.parse(a.Modified) - Date.parse(b.Modified),
				);
				break;
		}

		return visibleCollection;
	};
}
