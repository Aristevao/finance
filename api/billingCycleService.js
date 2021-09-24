const BillingCycle = require('./billingCycle');

/*  "methods" from node-restful
    Create a API rest as pattern to the BillingCycle object */
BillingCycle.methods(['get', 'post', 'put', 'delete']);

/*  This config <new: true> assure that when updated a
    document the response will contain the 
    new object and don't the previous, as
    default
    
    runValidators -> will emit an error if the sent 
    document don't match with the schema. 
    Ex: required:true. Will emit an error if this 
    attribute is not sent.
    As default runValidator = false */
BillingCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingCycle;