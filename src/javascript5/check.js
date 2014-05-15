var Check = {
    invalid: function(error) {
        console.error(error);
    },

    valid: function() {
        //do nothing
    },

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

    getDefault: function(val, defVal) {
        return val === undefined ? defVal : val;
    },

    defined: function(val, name) {
        return val === undefined ? invalid(name + " is undefined") : valid();
    },

    isPositive: function(val) {
        return nr < 0 ? invalid("negative: " + nr) : valid();
    }
}