module.exports = function toReadable (value) {
    let str = String(value);
    let index = str.length - 1;
    let result;
    let ones = Array('','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine');
    let teens = Array('ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    let tens = Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    if (str === '0') {
     return 'zero';
    }
     if (str.length === 1) {
         result = ones[Number(str)];
     } else if ((str.length === 2) && (value<20)) {
        result = teens[Number(str[str.length-1])];
     } else if ((str.length === 2) && (value >= 20) && (value%10 === 0)){
        result = tens[Number(str[0])];
     } else if ((str.length === 2) && (value >= 20) && (value%10 !== 0)) {
        result = `${tens[Number(str[0])]} ${ones[Number(str[str.length-1])]}`;
     }

     return result;
 } 