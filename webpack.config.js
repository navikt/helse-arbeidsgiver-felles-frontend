const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/felles/Side.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.sass', '.css']
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/lib/',
        filename: 'Felles.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    externals: {
        react: 'react'
    }
};
