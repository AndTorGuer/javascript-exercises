const fibonacci = function(num) {
let num1 = 0;
let num2 = 1;

if (num < 0) 
{ return "OOPS"; }

if (num === 0)
{ return 0; }

for(let i = 1; i < num; i++)
{
  const nextNum = num2;
  num2 = num1 + num2;
  num1 = nextNum;
}
return num2;

};







// Do not edit below this line
module.exports = fibonacci;
