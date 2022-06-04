require("dotenv").config();
{
  module.exports = {
    development: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: "JMT_development",
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dialect: "mysql",
      timezone: "+09:00",
      dialectOptions: {
        charset: "utf8mb4",
        dateStrings: true,
        typeCast: true,
        supportBigNumbers: true,
      },
    },
    test: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: "JMT_test",
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dialect: "mysql",
      timezone: "+09:00",
      dialectOptions: {
        charset: "utf8mb4",
        dateStrings: true,
        typeCast: true,
        supportBigNumbers: true,
      },
    },
    production: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: "JMT_production",
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      dialect: "mysql",
      timezone: "+09:00",
      dialectOptions: {
        charset: "utf8mb4",
        dateStrings: true,
        typeCast: true,
        supportBigNumbers: true,
      },
    },
  };
}
