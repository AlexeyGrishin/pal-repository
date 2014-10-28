package pal;
//::imports

//::module Maths
public class Maths {

    //::function hypot
    //@@spec 2 == hypot(2,0)
    //@@spec 2 == hypot(-2,0)
    //@@spec 0 == hypot(0,0)
    //@@spec 5 == hypot(3,4)
    //@@depends sqrt
    public static double hypot(double dx, double dy) {
        return sqrt(dx*dx + dy*dy);
    }

    //::function sqrt
    //@@native java.lang.Math.sqrt(_)
    public static double sqrt(double num) {
        return java.lang.Math.sqrt(num);
    }

    //::function pi
    //@@native java.lang.Math.PI
    public static double pi() {
        return java.lang.Math.PI;
    }

    //::addbefore
}