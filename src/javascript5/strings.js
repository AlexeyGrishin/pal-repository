var Strings = {
	truncate: function(str, maxLength, trailing) {
	    //:function(string,number,string='...'):string
	    //:unit ("abc", 3) => "abc"
	    //:unit ("abcd", 3) => "a..."
	    Check.defined(str, "str");
	    Check.defined(maxLength, "maxLength");
	    Check.defined(trailing, "trailing");
	    Check.type(str, "string");
	    Check.type(maxLength, "number");
	    Check.type(trailing, "string");
	    Check.isPositive(maxLength);
	    Check.isPositive(maxLength - trailing.length);
	    return str.length > maxLength ? (str.substring(0, maxLength - trailing.length) + trailing) : str;
	}
}