
package pal;
//::imports
import java.util.*;

//::module lists
public class Lists {
    //::function length
    //@@native _.size()
    public static int length(List<?> items) {
        return items.size();
    }

    //::function counter
    //@@depends length
    public static String counter(List<?> items, String prefix, String empty) {
        if (Lists.length(items) == 0) return empty;
        return prefix + Lists.length(items);
    }

    //::addbefore
}
                