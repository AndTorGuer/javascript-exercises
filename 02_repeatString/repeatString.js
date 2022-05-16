                             // 'hey', 3
const repeatString = function(aString,aNumber) {
    if (aNumber < 0) // error handling
    {
        return 'ERROR';
    }
    let newString = ''; // for this to work it has to be initialized
    for (let i = 0; i < aNumber; i++)
    {
       newString += aString;
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
