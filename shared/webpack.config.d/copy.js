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
            },
            {
                from: '../../node_modules/sql.js/dist/sql-wasm.wasm',
                to: '../../webApp/dist'
            }
        ]
    })
);