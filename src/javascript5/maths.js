(function(exports, imports) {
    //::imports
    var checks = imports.Checks;

    //::module math
    var maths = exports.Maths = {
        //::function hypot
        //@@depends sqrt,isDefined
        hypot: function(dx, dy) {
            checks.isDefined(dx, "dx");
            checks.isDefined(dy, "dy");
            return maths.sqrt(dx*dx + dy*dy);
        },
        //::function sqrt
        //@@native window.Math.sqrt(_)
        sqrt: function(num) {
            return window.Math.sqrt(num);
        },

        //::function normalizeDx
        //@@depends isDefined,hypot
        /**
         * Normalizes dx part of <dx,dy> vector
         * @param dx
         * @param dy
         */
        normalizeDx: function(dx, dy) {
            checks.isDefined(dx, "dx");
            checks.isDefined(dy, "dy");
            if (dx == 0 && dy == 0) return 0;
            return dx / maths.hypot(dx, dy);
        }
        ,

        //::addbefore
        stub: null
}})(window);