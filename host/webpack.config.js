const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "host"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        microfrontend: "microfrontend@http://localhost:4201/remoteEntry.js"
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true }
      }
    })
  ]
};