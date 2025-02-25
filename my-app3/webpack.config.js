const path = require('path');
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    a: './src/a.js',
    // b: './src/b.js',
    // c: './src/c.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
      
  //     // 生成 chunk 的最小体积（以 bytes 为单位）。
  //     // 因为演示的模块比较小，需要设置这个。
  //     minSize: 0,
  //   },
  // },
  // plugins: [new BundleAnalyzerPlugin()],
};
