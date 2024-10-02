import path from 'path';
import { WebpackPluginManifest } from 'src/webpack-plugin-manifest';
import TerserPlugin from 'terser-webpack-plugin';

module.exports = ({ mode }) => ({
  mode: mode,
  entry: {
    main: './src/index.js',
    styles: './src/index.css',
    html: './src/index.html',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/bundled'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      minify: true,
      compress: true,
    })],
  },
  plugins: [WebpackPluginManifest],
});