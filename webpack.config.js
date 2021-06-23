const webpack = require("webpack")
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  entry: { //webpack entry points, each dedicated to a different webpage, so the browser only loads scripts as needed by the page
    app: "./assets/js/script.js",// app goes in index.html
    events: "./assets/js/events.js",//events.html
    schedule: "./assets/js/schedule.js",//schedule.html
    tickets: "./assets/js/tickets.js"//tickets.html
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname + "/dist")//The name of each attribute in the entry object will be used in place of [name] in each bundle.js file that is created.(app, events, schedule, tickets)
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,// this object will id the type of files to pre-process using the test property to find a regex. This processes any .jpg
        use: [
          { // use file-loader to take the .jpgs found above, renames the emitted img, and places it into the /assets/img/ folder
            loader: 'file-loader',
            options: {
              esModule: false,// prevents file-loader from treating file like an ES5 module
              name (file) {
                return '[path][name].[ext]'//return the name of the file
              },
              publicPath: function(url) {
                return url.replace('../','/assets/')// substitute the '../' in the require() statements with '/assets/'
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
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static' //the report outputs to an HTML file in dist/
    })
  ],
  mode: "development"
};