export default {
  webpack(config, env, helpers, options) {
    if (env.production) {
      config.output.publicPath = "/profile/"
    }
  },
  plugins: [
    (config) => {
      if (config.devServer) {
        config.devServer.historyApiFallback = {
          index: "/index.html",
          disableDotRule: true,
        }
      }
    },
  ],
}







