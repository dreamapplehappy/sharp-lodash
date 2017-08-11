const path = require('path');

export default () => (
    {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'sharp-lodash.js',
            libraryTarget: 'umd',
            library: 'sharpLodash'
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]
        },
    }
);
