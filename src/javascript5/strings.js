//::module strings
(function(exports, Checks) {
    //@@tag strings
    exports.Strings = {
        //::function truncate
        //@@depends isDefined, isPositive
        truncate: function(str, maxLength, trailing) {
            //@@signature function(string,number,string='...'):string
            //@@unit ("abc", 3) => "abc"
            //@@unit ("abcd", 3) => "a..."
            Checks.defined(str, "str");
            Checks.defined(maxLength, "maxLength");
            Checks.defined(trailing, "trailing");
            Checks.type(str, "string");
            Checks.type(maxLength, "number");
            Checks.type(trailing, "string");
            Checks.isPositive(maxLength);
            Checks.isPositive(maxLength - trailing.length);
            return str.length > maxLength ? (str.substring(0, maxLength - trailing.length) + trailing) : str;
        }
        //::addbefore
}})(window, Checks)