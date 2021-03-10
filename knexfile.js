const path = require("path")

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: 'impacter-posts-dev',
      host: 'localhost',
      port: 5435,
      user: 'dev',
      password: 'dev',
    }
  },
}
