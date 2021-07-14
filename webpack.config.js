const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: {//webpack entry points, each dedicated to a different webpage, so the browser only loads scripts as needed by the page
    app: './assets/js/script.js',// app goes in index.html
    events: './assets/js/events.js',//events.html
    schedule: './assets/js/schedule.js',//schedule.html
    tickets: './assets/js/tickets.js'//tickets.html
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`//The name of each attribute in the entry object will be used in place of [name] in each bundle.js file that is created.(app, events, schedule, tickets)
    // path.join(__dirname + "/dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i, // this object will id the type of files to pre-process using the test property to find a regex. This processes any .jpg
        use: [
          { // use file-loader to take the .jpgs found above, renames the emitted img, and places it into the /assets/img/ folder
            loader: 'file-loader',
            options: {
              esModule: false,// prevents file-loader from treating file like an ES5 module
              name(file) {
                return '[path][name].[ext]';//return the name of the file
              },
              publicPath(url) {
                return url.replace('../', '/assets/');// substitute the '../' in the require() statements with '/assets/'
              }
            }
          },
          {
            loader: 'image-webpack-loader'//load image-webpack-loader which optimizes the images emitted from the file-loader
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({// new = calling a constructor function so we are instantiating each plugin prior to using them
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'//the report outputs to an HTML file in dist/
    }),
    new WebpackPwaManifest({
      name: 'Food Event',
      short_name: 'Foodies',
      description: 'An app that allows you to view upcoming food events.',
      start_url: '../index.html',// homepage for the PWA relative to the manifest.json
      background_color: '#01579b',
      theme_color: '#ffffff',
      fingerprints: false,// do not generate a unique key for each instance of this plugin
      inject: false,// determines if the link to manifest.json is added to the HTML. We can hardcode this because we are not using fingerprints
      icons: [// the icon for the pwa
        {
          src: path.resolve('assets/img/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons')// determines where the icons will be sent after the web manifest has been completed by the plug in.
        }
      ]
    })
  ],
  mode: 'development'
};

module.exports = config;
