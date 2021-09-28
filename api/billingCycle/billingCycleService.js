const _ = require('lodash');
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

/* Treats errors messages */
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors);
        res.status(500).json({ errors });
    } else {
        next();
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
}

// Serviço Contador (count) de Ciclo de Pagamentos
BillingCycle.route('count', function (req, res, next) {
    BillingCycle.count(function (error, value) {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json({ value });
        }
    });
});

module.exports = BillingCycle;