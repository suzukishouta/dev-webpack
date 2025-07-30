const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
	cache: true,
	target: ['web', 'es5'],

	entry: {
		bundle: `${__dirname}/src/js/index.js`,
	},

	output: {
		path: `${__dirname}/dest`,
		filename: '[name].js',
		assetModuleFilename: 'assets/[name][ext]',
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
			{
				test: /\.(scss|css)$/,
				sideEffects: true,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: true,
							importLoaders: 3,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								plugins: [
									['autoprefixer', { grid: 'autoplace' }],
									['postcss-sort-media-queries', { sort: 'mobile-first' }],
								],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(jpg|png|svg|woff|woff2|eot|ttf)(\?.*$|$)/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024,
					},
				},
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new RemoveEmptyScriptsPlugin(),
	],
};
