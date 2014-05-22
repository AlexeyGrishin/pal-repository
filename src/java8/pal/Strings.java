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
     **/
    public static String truncate(String str, int maxLength, String trailing) {
        isDefined(str, "str");
        isDefined(trailing, "trailing");
        isPositive(maxLength);
        isPositive(maxLength - trailing.length());
        return str.length() > maxLength ? str.substring(0, maxLength - trailing.length()) + trailing : str;
        //@unit ("abc", 3) => "abc"
        //@unit ("abcd", 3) => "a..."
    }
    //::function truncate
    //@@depends isDefined
    public static String normalizeSpaces(String str) {
        isDefined(str, "str");
        return str.replaceAll("\\s+", " ");
    }
  //::function truncateLeading
  public static String truncateLeading(String str, int maxLength, String leading) {
     return str;
  }

    
    //::addbefore
}