// Load environment variables from the `.env` file.
require('dotenv-flow').config();

module.exports = {
    port: process.env.PORT || '8080'
};
