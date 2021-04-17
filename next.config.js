const headers = require('./config/headers');

module.exports = {
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return headers;
  },
};
