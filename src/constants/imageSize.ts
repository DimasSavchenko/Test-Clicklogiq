const imageSize = {
	height: 50,
	width: 50,
};

export const imageParams = (): string =>
	`width=${imageSize.width}&height=${imageSize.height}`;
