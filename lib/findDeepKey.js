var _ = require('lodash');

var me = module.exports;

me.function fn(obj, key) {
    if (_.has(obj, key))
        return [obj];
    return _.flatten(_.map(obj, function(v) {
        return typeof v == "object" ? fn(v, key) : [];
    }), true);
}