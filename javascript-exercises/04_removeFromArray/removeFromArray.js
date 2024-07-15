const removeFromArray = function(array, ...remove) {
    return array.filter(val => !remove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
