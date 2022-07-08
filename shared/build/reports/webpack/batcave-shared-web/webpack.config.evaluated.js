{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/300067934/shibasis/batcave/build/js/packages/batcave-shared-web/kotlin/batcave-shared-web.js'
    ]
  },
  output: {
    path: '/Users/300067934/shibasis/batcave/shared/build/distributions',
    filename: [Function: filename],
    library: 'shared',
    libraryTarget: 'commonjs2',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}