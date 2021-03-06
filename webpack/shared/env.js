// file shamelessly stolen from create-react-app
'use strict';

const fs = require('fs');
const path = require('path');

const rootEnvFile = path.join(process.cwd(), '.env');

// Make sure that including paths.js after env.js will read .env variables.
delete require.cache[require.resolve('./constants')];

// Grab NODE_ENV and REACT_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
const REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(mode) {
	let NODE_ENV = mode;

	if (!NODE_ENV) {
		throw new Error(
			'The NODE_ENV environment variable is required but was not specified.',
		);
	}

	let dotenvFiles = [
		`${rootEnvFile}.${NODE_ENV}.local`,
		`${rootEnvFile}.${NODE_ENV}`,
		rootEnvFile,
	];

	dotenvFiles.forEach((dotenvFile) => {
		// eslint-disable-next-line no-sync
		if (fs.existsSync(dotenvFile)) {
			// eslint-disable-next-line global-require
			require('dotenv-expand')(
				// eslint-disable-next-line global-require
				require('dotenv').config({
					path: dotenvFile,
				}),
			);
		}
	});

	let raw = Object.keys(process.env)
		.filter((key) => REACT_APP.test(key))
		.reduce(
			(env, key) => {
				// eslint-disable-next-line no-param-reassign
				env[key] = process.env[key];

				return env;
			},
			{
				// Useful for determining whether we’re running in production mode.
				// Most importantly, it switches React into the correct mode.
				NODE_ENV: process.env.NODE_ENV || 'development',
			},
		);
	// Stringify all values so we can feed into Webpack DefinePlugin
	let stringified = {
		'process.env': Object.keys(raw).reduce((env, key) => {
			// eslint-disable-next-line no-param-reassign
			env[key] = JSON.stringify(raw[key]);

			return env;
		}, {}),
	};

	return stringified;
}

module.exports = getClientEnvironment;
