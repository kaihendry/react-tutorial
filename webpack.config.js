module.exports = {
	entry: './public/scripts/example.js',
	output: { path: __dirname + '/public/', publicPath: '/public/', filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ test: /\.css/,
				loaders: ['style', 'css']
			}
		]
	},
};

