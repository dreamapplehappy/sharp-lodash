const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'sharp-lodash.js',
        path: path.resolve(__dirname, 'dist')
    }
};