const repeatString = function(str, times) {
    let outputStr = "";
    if(times < 0){
        return "ERROR";
    }
    for(let i = 0; i < times; i++){
        outputStr += str;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
