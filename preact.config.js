export default {
  webpack(config, env, helpers, options) {
    if (env.production) {
      config.output.publicPath = "/"
    }
  },
  plugins: [
    (config) => {
      if (config.devServer) {
        config.devServer.historyApiFallback = true
      }
    },
  ],
}

