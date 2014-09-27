//::module math
(function(exports, imports) {
    //@@tag maths
    exports.Maths = {
        //::function hypot
        //@@depends sqrt
        hypot: function(dx, dy) {
            return sqrt(dx*dx + dy*dy);
        },

        //::function sqrt
        //@@native window.Math.sqrt(_)
        sqrt: function(num) {
            return window.Math.sqrt(num);
        },

        //::addbefore
        stub: null
}})(window)