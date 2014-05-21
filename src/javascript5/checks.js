//::module checks
(function(exports) {
    exports.Checks = {
        //::function invalid
        invalid: function(error) {
            console.error(error);
        },

        //::function valid
        valid: function() {
            //do nothing
        },

        //::function type
        type: function(val, type) {
            var valid = false;
            if (type.enum) {
                return type.enum.indexOf(val) == -1 ? invalid("invalid enum: " + val + ", " + type.enum) : valid();
            }
            else if (typeof type === 'string') {
                return typeof val === type ? valid() : invalid("type of '" + val + "' does not match type '" + type + "'");
            }
            else {
                return val instanceof type;
            }
        },

        //::function getDefault
        getDefault: function(val, defVal) {
            return val === undefined ? defVal : val;
        },

        //::function isDefined
        //@@depends valid, invalid
        isDefined: function(val, name) {
            return val === undefined ? invalid(name + " is undefined") : valid();
        },

        //::function isPositive
        //@@depends valid, invalid
        isPositive: function(val) {
            return nr < 0 ? invalid("negative: " + nr) : valid();
        }
        //::addbefore
    }
})(window)