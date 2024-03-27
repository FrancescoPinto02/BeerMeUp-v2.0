const { Sequelize } = require('sequelize');

// Database Connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 100,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        query: {
            raw: false,
        },
        logging: process.env.DB_DEBUG > 0,
        timezone: '+01:00',
    },
);

// Testing Connection
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
