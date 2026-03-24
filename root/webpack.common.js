const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

// 共通設定を返す関数
const createConfig = (entry, outputPath, clean = false) => ({
	cache: true,
	target: ['web', 'es5'],
	entry,
	output: {
		path: outputPath,
		filename: '[name].js',
		assetModuleFilename: 'assets/[name][ext]',
		clean, // 必要なほうだけ clean
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['@babel/preset-env'] },
				},
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
						options: { sourceMap: true },
					},
				],
			},
			{
				test: /\.(jpg|png|svg|woff|woff2|eot|ttf)(\?.*$|$)/,
				type: 'asset',
				parser: {
					dataUrlCondition: { maxSize: 4 * 1024 },
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css', // 各 entry ごとに JS と CSS 出力
		}),
		new RemoveEmptyScriptsPlugin(),
	],
});

// 複数設定を配列で export
module.exports = [
	createConfig(
		{
			bundle: `${__dirname}/src/js/index.js`,
		},
		path.resolve(__dirname, 'dest'),
		true // ← bundle 側で clean する
	),
	// 出力先を'dest'以外にしたいファイルは下記のように追加してください。
	createConfig({ custom: `${__dirname}/src/js/custom.js` }, path.resolve(__dirname, 'include/edit'), true),
];
