var path = require('path');
module.exports = {
	entry: {
		script: "./xinput/xjs/xscript.js",
		vendor: "./xinput/xjs/vendor.js"
	},
	output: {
		path: path.resolve(__dirname,"./xoutput/assets/js/"),
		filename: "[name].js"
	},
	module:{
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets:['es2015']
				},
				test:/\.js$/,
				exclude:/node_modules/
			}
		]
	}
};
