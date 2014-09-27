package pal;
//::imports
import static pal.Checks.*;
//::module strings
public class Strings {
    public static String truncate(String str, int maxLength) {
        return truncate(str, maxLength, "...");
    }
    //::function truncate
    //@@depends isDefined, isPositive

    /**
     * Truncates :)
     */
    public static String truncate(String str, int maxLength, String trailing) {
        isDefined(str, "str");
        isDefined(trailing, "trailing");
        isPositive(maxLength);
        isPositive(maxLength - trailing.length());
        return str.length() > maxLength ? str.substring(0, maxLength - trailing.length()) + trailing : str;
        //@@spec "abc" == truncate("abc", 3)
        //@@spec "a..." == truncate("abcd", 3)
    }

    //::function normalizeSpaces
    //@@depends isDefined
    public static String normalizeSpaces(String str) {
        isDefined(str, "str");
        return str.replaceAll("\\s+", " ");
    }

    //::addbefore
}