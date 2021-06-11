"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
// const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  //   async findOne(ctx) {
  //     const { id } = ctx.params;
  //     const entity = await strapi.services.project.findOne({ id });
  //     entity.img.url = entity.img.url.replace(
  //       "/uploads",
  //       `${strapi.config.get("server.url")}/uploads`
  //     );
  //     return sanitizeEntity(entity, { model: strapi.models.project });
  //   },
  //   async find(ctx) {
  //     const projects = await strapi.services.project.find(ctx.query);
  //     projects.map((project) => {
  //       project.img.url = project.img.url.replace(
  //         "/uploads",
  //         `${strapi.config.get("server.url")}/uploads`
  //       );
  //       return project;
  //     });
  //     return sanitizeEntity(projects, { model: strapi.models.project });
  //   },
};
