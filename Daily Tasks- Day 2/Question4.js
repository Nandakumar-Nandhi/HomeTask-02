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

var array=[];
function make(number)
{
    if(number===add){
      return add();
    }
    else if(number===mul){
      return mul();
    }
    else if(number){
      array.push(number);
    }
    return function(current){
       if(current){
          return make(current);
       }
   }
} 
function add(){
  var result=0;
  for(let i=0;i<array.length;i++){
    result+=array[i];
  }
  return result;
} 
function mul(){
  var result=1;
  for(let i=0;i<array.length;i++){
    result*=array[i];
  }
  return result;
} 
var s=make(1)(2)(3)(4);
console.log(s(add));
console.log(s(mul));
