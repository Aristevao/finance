const server = require('./config/server');
require('./config/database');
require('./config/routes')(server); // passing 'server' parameter to the function inside routes layer

