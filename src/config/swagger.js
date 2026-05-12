// Swagger configuration

const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
    },

    servers: [
      {
        url: process.env.SERVER_URL
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },

      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
          },
        },
      },
    },
  },

  apis: ["./src/routes/**/*.js"], // IMPORTANT FIX
};

module.exports = swaggerJsDoc(options);
