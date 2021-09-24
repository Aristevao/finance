const BillingCycle = require('./billingCycle');

/*  "methods" from node-restful
    Create a API rest as pattern to the BillingCycle object */
BillingCycle.methods(['get', 'post', 'put', 'delete']);

module.exports = BillingCycle;