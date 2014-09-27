//::module strings
(function(exports, imports) {
    var checks = imports.Checks;
    //@@tag strings
    exports.Strings = {
        //::function truncate
        //@@depends isDefined, isPositive
        truncate: function(str, maxLength, trailing) {
            //@@spec "abc" == truncate("abc", 3)
            //@@spec "a..." == truncate("abcd", 3)
            checks.defined(str, "str");
            checks.defined(maxLength, "maxLength");
            checks.defined(trailing, "trailing");
            checks.type(str, "string");
            checks.type(maxLength, "number");
            checks.type(trailing, "string");
            checks.isPositive(maxLength);
            checks.isPositive(maxLength - trailing.length);
            return str.length > maxLength ? (str.substring(0, maxLength - trailing.length) + trailing) : str;
        },

        //::function normalizeSpaces
        //@@depends isDefined
        normalizeSpaces: function(str) {
            checks.isDefined(str, "str");
            return str.replaceAll(/\s+/, "");
        },
        //::addbefore
        stub: null
}})(window)