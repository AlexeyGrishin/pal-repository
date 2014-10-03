
(function(exports, imports) {
    //::imports

    //::module checks
    var checks = exports.Checks = {
        //::function invalid
        invalid: function(error) {
            console.error(error);
        },

        //::function valid
        valid: function() {
            //do nothing
        },

        //::function isDefined
        //@@depends valid, invalid
        isDefined: function(val, name) {
            return val === undefined ? checks.invalid(name + " is undefined") : checks.valid();
        },

        //::function isPositive
        //@@depends valid, invalid
        isPositive: function(nr) {
            return nr < 0 ? checks.invalid("negative: " + nr) : checks.valid();
        },

        //::function isNegative
        //@@depends valid, invalid
        isNegative: function(nr) {
            return nr > 0 ? checks.invalid("positive: " + nr) : checks.valid();
        },

        //::addbefore
        stub: null
    }
})(window);