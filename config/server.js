module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("WEBSITE", "http://127.0.0.1:1337"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "602e37eec222d64dd1f8498ab857942a"),
    },
  },
});
