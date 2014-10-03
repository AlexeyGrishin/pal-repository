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

     ///::function reverse
     ///@@depends isDefined
     ///@@spec "ba" == :reverse("ab")
     ///@@spec "a" == :reverse("a")
     ///@@spec "" == :reverse("")
     /**
      * Reverses the string - really!
      */
     public static String reverse(String str) {
         isDefined(str, "str");
         char[] buffer = str.toCharArray();
         for (int i = 0; i < buffer.length / 2 + 1; i++) {
             char temp = buffer[i];
             buffer[i] = buffer[buffer.length - 1 - i];
             buffer[buffer.length - 1 - i] = temp;
         }
         return new String(buffer);
     }

    ///::function strToInt
    //@@native Integer.parseInt(_)
    public static int strToInt(String str) {
        return Integer.parseInt(str);
    } 

    ///::function intToStr
    //@@native ("" + _)
    public static String intToStr(int i) {
        return ("" + i);
    }

    //::addbefore
}