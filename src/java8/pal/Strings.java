package pal;

public class Strings {

    public static String truncate(String str, int maxLength) {
        return truncate(str, maxLength, "...");
    }

    ///truncate("abc", 3)
    ///  => "abc"
    ///truncate("abcd", 3, "?")
    ///  => "ab?"
    public static String truncate(String str, int maxLength, String trailing) {
        Check.isDefined(str, "str");
        Check.isDefined(trailing, "trailing");
        Check.isPositive(maxLength);
        Check.isPositive(maxLength - trailing.length());
        return str.length() > maxLength ? str.substring(0, maxLength - trailing.length()) + trailing : str;
    }

}
