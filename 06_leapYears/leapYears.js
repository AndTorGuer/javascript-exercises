const leapYears = function(year) {
// Will check that is divisible by 4 first.
// then will check either for divisible by 400 
// or not divisible by 100.
// Remembering that div by 4 and 400 means leap year
// div by 100 means not leap.    
return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)
};

// Do not edit below this line
module.exports = leapYears;
