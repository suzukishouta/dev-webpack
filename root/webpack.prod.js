const merge = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(production, {
	mode: 'development',
});
