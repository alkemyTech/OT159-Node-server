
const path = require('path')

swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Somos Más API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [
        `${path.join(__dirname, '/*.js')}`
    ],
  }

  module.exports = swaggerSpec