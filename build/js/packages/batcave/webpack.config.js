let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/300067934/shibasis/batcave/build/js/packages/batcave/kotlin/batcave.js"]
};

config.output = {
    path: "/Users/300067934/shibasis/batcave/shared/batcave",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "batcave.js"
            : "batcave-[name].js";
    },
    library: "shared",
    libraryTarget: "commonjs2",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/Users/300067934/shibasis/batcave/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// copy.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
config.plugins.push(
    new CopyWebpackPlugin({
        patterns: [
            // {
            //     from: '../../node_modules/sql.js/dist/sql-wasm.wasm',
            //     to: '../../../{your project}/build/distributions'
            // }
            {
                from: "kotlin/batcave.d.ts",
                to: "../../shared/batcave"
            }
        ]
    })
);


// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/300067934/shibasis/batcave/shared/build/reports/webpack/batcave/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
