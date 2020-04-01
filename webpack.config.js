const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MinifyPlugin = require('babel-minify-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname, 'app'),
  mode: 'development',
  entry: {
    vendors: './app/assets/javascripts/vendors.js',
    index: './app/assets/javascripts/index.js'
    // appCandidate
    // appEnterprise
    // appAdmin
    // appTest
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.m?[t|j]s$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              prependData: '$env: ' + process.env.NODE_ENV + ';',
              sassOptions: {
                outputStyle: 'uncompressed' // uncompressed | compressed
              }
            }
          }
        ]
      },
      {
        test: /\.twig$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          },
          {
            loader: 'twig-loader',
            options: {
              partials: './app/views/**/*.twig'

            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html'
    // }),
    new CleanWebpackPlugin({

    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './app/assets/',
    filename: '[name].bundle.js', // [contenthash]
    library: 'library',
    libraryTarget: 'umd',
    sourceMapFilename: 'sourcemaps/[file].map',
    chunkFilename: '[id].js'
  },
  node: {
    fs: 'empty' // avoids error messages
    // Buffer: false,
    // process: false
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({})
    ],
    splitChunks: {
      chunks: 'all'
    }
    // runtimeChunk: 'single'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    proxy: {
      '/api': 'http://localhost:8000'
    },
    port: 9000
  },
  devtool: 'source-map',
  target: 'web'
}
