var path = require('path');
module.exports = {
	entry: {
		Xscript: "./xinput/xjs/xscript.js",
		Vendor: "./xinput/xjs/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname,"./xoutput/js/"),
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
