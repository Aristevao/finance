const express = require('express');

module.exports = server => {
    
    // API Routes
    const router = express.Router();
    server.use('/api', router) ;// "use" defines '/api' as default route 
};