import { observable } from 'mobx';
import { default as axios, AxiosError, AxiosRequestConfig } from 'axios';

import { RootStore } from './RootStore';
import { IAjaxResponse } from '../models/IAjaxResponse';

export class BaseStore {
	rootStore: RootStore;

	@observable
	networkError: AxiosError | undefined;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	async getUrl<T>(
		url: string,
		requestConfig: AxiosRequestConfig = {},
	): Promise<IAjaxResponse<T> | undefined> {
		const host = '/mocks';
		const extention = requestConfig.responseType === 'blob' ? '.jpg' : '.json';
		const axiosOptions = { ...requestConfig }; // can be extended by needed params, e.g. headers

		const finalUrl = `${host}${url}${extention}`;

		try {
			const response = await axios.get<T>(finalUrl, axiosOptions);
			return {
				data: response.data,
			};
		} catch (error) {
			return { error };
		}
	}
}
