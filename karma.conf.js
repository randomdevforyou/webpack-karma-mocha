var webpack = require("webpack");
module.exports = function (config) {
 config.set({
  browsers: [ "Chrome" ], //run in Chrome
  singleRun: true, //just run once by default
  frameworks: [ "mocha",  "chai"], //use the mocha test framework
  files: [
   "tests.webpack.js" //just load this file
  ],
  preprocessors: {
   "tests.webpack.js": [ "webpack", "sourcemap" ] //preprocess with webpack and our sourcemap loader
  },
  reporters: [ "mocha", "coverage" ], //report results in this format
  webpack: { //kind of a copy of your webpack config
    devtool: "inline-source-map", //just do inline source maps instead of the default
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
            },
            {
                test: /\.js$|\.jsx$/,
                use: {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
                },
                enforce: 'post',
                exclude: /node_modules|\.spec\.js$/,
            }
        ]
    }
  },
  webpackServer: {
   noInfo: true //please don’t spam the console when running in karma!
  },
  coverageReporter: {
   type: "text", //produces a html document after code is run
   dir: "coverage" //path to created html doc
  }
 });
};