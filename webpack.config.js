const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prefixer = require('postcss-prefix-selector');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css', '.sass']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'lib'),
        publicPath: '/lib/',
        filename: 'helse-arbeidsgiver-felles-frontend.js',
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
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                prefixer({
                                    prefix: '.felles',
                                    exclude: ['.felles']
                                })
                            ]
                        }
                    },
                    'less-loader'
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
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'helse-arbeidsgiver-felles-frontend.css'
        })
    ],

    externals: {
        react: 'react',
        'react-dom': 'reactDom',
        'react-router-dom': 'react-router-dom',
        '@navikt/bedriftsmeny': '@navikt/bedriftsmeny'
    }
};
