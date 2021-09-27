const express = require('express');

module.exports = server => {
    
    // API Routes
    const router = express.Router();
    /*  "use" defines '/api' as default route.
        Every endpoint needs to contain '/api'
        Ex: /api/test  */
    server.use('/api', router);

    const billingCycleService = require('../api/billingCycleService');
    billingCycleService.register(router, '/billingCycles');
};