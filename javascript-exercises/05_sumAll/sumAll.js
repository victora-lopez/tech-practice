const sumAll = function(startNum, endNum) {
    if(startNum < 0 || endNum < 0) return "ERROR";
    else if(!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR";
    
    let totalSum = 0;
    if(startNum > endNum){
        [startNum, endNum] = [endNum, startNum];
    }

        for(startNum; startNum <= endNum; startNum++){
            totalSum += startNum;
        }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
