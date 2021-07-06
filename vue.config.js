process.env.VUE_APP_API_URL = process.env.API_URL;

module.exports = {
  devServer: {
    port: process.env.PORT || 8080,
  },
};
