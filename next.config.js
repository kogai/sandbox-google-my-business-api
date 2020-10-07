module.exports = {
  serverRuntimeConfig: {
    clientSecret: process.env.CLIENT_SECRET,
  },
  publicRuntimeConfig: {
    clientID: process.env.CLIENT_ID,
    redirectURI: process.env.REDIRECT_URI,
  },
}
