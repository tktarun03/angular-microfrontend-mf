const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "microfrontend"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroComponent": "./src/app/micro.component.ts"
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true }
      }
    })
  ]
};