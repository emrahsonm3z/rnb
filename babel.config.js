const MODULE_RESOLVER = [
  'module-resolver',
  {
    root: ['./src'],
    extensions: [
      '.js',
      '.jsx',
      '.ios.js',
      '.ios.jsx',
      '.android.js',
      '.android.jsx',
      '.json'
    ],
    alias: {
      '@': './src'
    }
  }
]

module.exports = {
  plugins: [MODULE_RESOLVER],
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['ignite-ignore-reactotron', MODULE_RESOLVER]
    }
  }
}
