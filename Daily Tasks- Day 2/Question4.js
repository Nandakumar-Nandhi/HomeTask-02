/*
function add(x, y) { return x + y; }
function mul(x, y) { return x * y; }
function make(???) {  ???  }

var s = make(1)(2)(3)(4)(5);
Assert(s(add) == 15);
Assert(s(mul) == 120);
var x = make(5)(10)(15);
Assert(x(add) == 30);
Assert(x(mul) == 750);
*/
function add(x, y) { return x + y; }
function mul(x, y) { return x * y; }
function make(/*???*/) { /* ??? */ }

var s = make(1)(2)(3)(4)(5);
Assert(s(add) == 15);
Assert(s(mul) == 120);
var x = make(5)(10)(15);
Assert(x(add) == 30);
Assert(x(mul) == 750);