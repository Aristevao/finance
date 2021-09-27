const express = require('express');

module.exports = server => {

    // API Routes
    const router = express.Router();
    /*  "use" defines '/api' as default route.
        Every endpoint needs to contain '/api'
        Ex: /api/test  */
    server.use('/api', router);

    const billingCycleService = require('../api/billingCycle/billingCycleService');
    billingCycleService.register(router, '/billingCycles');

    const billingSummaryService = require('../api/billingSummary/billingSummaryService');
    router.route('/billingSummary').get(billingSummaryService.getSummary); 
};