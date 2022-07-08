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
    TeamCityErrorPlugin {},
    CopyPlugin {
      patterns: [
        {
          from: 'kotlin/batcave.d.ts',
          to: '../../../shared/batcave'
        }
      ],
      options: {}
    }
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
      '/Users/300067934/shibasis/batcave/build/js/packages/batcave/kotlin/batcave.js'
    ]
  },
  output: {
    path: '/Users/300067934/shibasis/batcave/shared/batcave',
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