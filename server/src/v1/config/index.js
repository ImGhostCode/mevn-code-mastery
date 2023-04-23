module.exports = {
  app: {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
  },
  jwt: {
    jwt_secret: process.env.JWT_SECRET
  },
  cloudinary: {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  }
};
