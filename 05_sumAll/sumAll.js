const sumAll = function(par1,par2) 
{ 
  var sum = 0;
  // I'm saying here that if my arguments are negative or not a number with typeof
  // return 'ERROR'.

  if(typeof par1 !== 'number' || typeof par2 !== 'number')
  {
      return "ERROR";
  }  
  if(par1 < 0 || par2 < 0 )
  {
      return "ERROR";
  } 
  else
  {
    if(par1 > par2)
    {
      for (let i = par1; i >= par2; i--)
      {
          sum += i;
      }
      return sum;
    }
    else if(par2 > par1)
    {
      for (let i = par1; i <= par2; i++)
      {
        sum += i;
      } 
      return sum;
    }
  }


  
};

// Do not edit below this line
module.exports = sumAll;
