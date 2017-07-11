/**
 * Created by Administrator on 2017/7/10 0010.
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({ rootValue: 100, propWhiteList: [] })
    ],
};

const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
    // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];
module.exports = {
    entry:{
        app: './src/app.js',
        vendor: ['react', 'react-dom', 'react-router','react-router-dom','scriptjs','whatwg-fetch']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle-[name]-[hash:5].js",
        chunkFilename: "bundle-[name]-[hash:5].js"
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), path.join(__dirname, 'src')],
        extensions: ['.web.js', '.jsx', '.js', '.json'],
    },
    module: {
        loaders: [
            { test: /\.js/, exclude: /node_modules/, loader: "babel-loader?cacheDirectory=true" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader',
                use: ['css-loader', { loader: 'postcss-loader', options: postcssOpts }] })},
            { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader',
                use: ['css-loader', { loader: 'postcss-loader', options: postcssOpts }, 'less-loader'] }) },
            { test: /\.(png|gif)$/, loader: 'file-loader' },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite-loader',
                include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle-[name]-[hash:5].css', disable: false, allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.ejs'
        })
    ],
    devServer: {
        port: 8080,
        host:'0.0.0.0',
        disableHostCheck: true
    }
}