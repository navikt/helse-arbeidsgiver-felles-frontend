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
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },

    externals: {
        react: 'react'
    }
};
