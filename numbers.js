function calculateDistance(a, b) {
    return Math.abs(b - a);
};
console.log(calculateDistance(0, 5));

function calculateSegmentProduct(a, b, c) {
    return Math.abs(a - c) * Math.abs(b - c);
};
console.log(calculateSegmentProduct(-1, 12, 7));

function calculateKilobytes(fileSizeInBytes) {
    return Math.floor(fileSizeInBytes / 1024);
};
console.log(calculateKilobytes(2048));

function calculateSegments(lengthA, lenghtB) {
    return Math.floor(lengthA / lenghtB);
};
console.log(calculateSegments(10, 3));

function calculateDigitSum(twoDigitNumber) {
    const dr = twoDigitNumber.toString();
    const dd = dr.slice(0, 1)
    const dg = dr.slice(-1)
    return Number(dd) + Number(dg);
    };
    console.log(calculateDigitSum(89));

function swapHundredsAndTens(twoDigitNumber) {
    const dr = twoDigitNumber.toString();
    const dd = dr.slice(0, 1);
    const dg = dr.slice(-2, -1);
    const ds = dr.slice(2);
    const fd = dd + dg;
    const rv = fd.split("").reverse().join("");
    
    return Number(`${rv}${ds}`);
      };
console.log(swapHundredsAndTens(987));

function getHundredsDigit(number) {
    if (number <= 999) {
      return 0;
    }
  
    return Math.floor((number % 1000) / 100);
};
console.log(getHundredsDigit(9876));    

function getFullHours(seconds) {
    return Math.floor(seconds / 3600);
};
console.log(getFullHours(3600));

function getDayOfWeek(k) {
    return k % 7;
};
console.log(getDayOfWeek(10));

function countSquares(a, b, c) {
    return Math.floor(a / c) * Math.floor(b / c);
};
console.log(countSquares(10, 10, 5));

export {
    calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum, swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek, countSquares   
};