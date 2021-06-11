module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: "furnitureshopadminapi",
      api_key: "155622189783364",
      api_secret: "Ajj4rNDmOvTNeUGb1gOjs90_zww",
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
