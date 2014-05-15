package pal;

public class Check {
    public static boolean isTrue(boolean condition, String comment) {
        return condition ? valid() : invalid(comment);
    }

    public static boolean isDefined(Object o, String name) {
        return o == null ? invalid("undefined: " + name) : valid();
    }

    public static <T> T getDefault(T val, T defVal) {
        return val == null ? defVal : val;
    }

    public static boolean isPositive(Integer nr) {
        return nr < 0 ? invalid("negative: " + nr) : valid();
    }

    public static boolean invalid(String error) {
        throw new IllegalArgumentException(error);
    }

    public static boolean valid() {
        return true;
    }


}
