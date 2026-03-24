const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = common.map((config) =>
	merge(config, {
		mode: 'production',
		devtool: false, // 本番では source-map を無効化
		optimization: {
			minimize: true,
		},
	})
);
